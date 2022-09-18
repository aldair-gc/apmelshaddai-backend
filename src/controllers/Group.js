import Group from '../models/Group';

class GroupController {
  async index(req, res) {
    try {
      const groups = await Group.findAll({ attributes: ['group'] });
      return res.json(groups);
    } catch (err) {
      if (err.errors) return res.status(400).json({ errors: err.errors.map((e) => e.message) });
      return res.status(400).send(err);
    }
  }

  async store(req, res) {
    try {
      const group = await Group.create(req.body);
      return res.json(group);
    } catch (err) {
      if (err.errors) return res.status(400).json({ errors: err.errors.map((e) => e.message) });
      return res.status(400).send(err);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ error: ['ID missing'] });
      await Group.destroy({ where: { id } });
      return res.json({ mediaDeleted: true });
    } catch (err) {
      if (err.errors) return res.status(400).json({ errors: err.errors.map((e) => e.message) });
      return res.status(400).send(err);
    }
  }
}

export default new GroupController();
