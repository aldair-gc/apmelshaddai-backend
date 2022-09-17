import Post from '../models/Post';

class HomeController {
  async index(req, res) {
    const newPost = await Post.create({
      group: 'test', title: 'test', text: 'test', file: 'test', url: 'test',
    });
    res.json({
      newPost,
    });
  }
}

export default new HomeController();
