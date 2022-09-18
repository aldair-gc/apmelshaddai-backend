import Link from '../models/Link';

class LinkController {
  async store(req, res) {
    try {
      const link = await Link.create(req.body);
      return res.json(link);
    } catch (err) {
      return res.status(400).json({ errors: ['this ID does not match a registered post'] });
      // return res.status(400).json({ errors: err.errors.map((e) => e.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ error: ['ID missing'] });
      await Link.destroy({ where: { post_id: id } });
      return res.json({ mediaDeleted: true });
    } catch (e) {
      console.error(e);
      return res.status(400).json({ errors: e.errors.map((er) => er.message) });
    }
  }
}

export default new LinkController();
