import Post from '../models/Post';
import Media from '../models/Media';
import Link from '../models/Link';

class PostController {
  async index(req, res) {
    try {
      const posts = await Post.findAll({
        attributes: ['id', 'group', 'title', 'text'],
        order: [['id', 'DESC'], [Media, 'id', 'DESC'], [Link, 'id', 'DESC']],
        include: [
          {
            model: Media,
            attributes: ['filename', 'url'],
          },
          {
            model: Link,
            attributes: ['url'],
          },
        ],
      });
      return res.json(posts);
    } catch (err) {
      if (err.errors) return res.status(400).json({ errors: err.errors.map((e) => e.message) });
      return res.status(400).send(err);
    }
  }

  async store(req, res) {
    try {
      const post = await Post.create(req.body);
      return res.json(post);
    } catch (err) {
      if (err.errors) return res.status(400).json({ errors: err.errors.map((e) => e.message) });
      return res.status(400).send(err);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['ID missing'] });
      const post = await Post.findByPk(id);
      if (!post) return res.starus(400).json({ errors: ['post inexistent'] });
      const postUpdated = await post.update(req.body);
      return res.json(postUpdated);
    } catch (err) {
      if (err.errors) return res.status(400).json({ errors: err.errors.map((e) => e.message) });
      return res.status(400).send(err);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ error: ['ID missing'] });

      const post = await Post.findByPk(id, {
        attributes: ['id', 'group', 'title', 'text'],
        order: [['id', 'DESC'], [Media, 'id', 'DESC'], [Link, 'id', 'DESC']],
        include: [
          {
            model: Media,
            attributes: ['filename', 'url'],
          },
          {
            model: Link,
            attributes: ['url'],
          },
        ],
      });

      if (!post) return res.status(400).json({ error: ['post inexistent'] });
      return res.json(post);
    } catch (err) {
      if (err.errors) return res.status(400).json({ errors: err.errors.map((e) => e.message) });
      return res.status(400).send(err);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ error: ['ID missing'] });
      const post = await Post.findByPk(id);
      if (!post) return res.status(400).json({ error: ['ID missing'] });
      await post.destroy();
      return res.json({ postDeleted: true });
    } catch (err) {
      if (err.errors) return res.status(400).json({ errors: err.errors.map((e) => e.message) });
      return res.status(400).send(err);
    }
  }
}

export default new PostController();
