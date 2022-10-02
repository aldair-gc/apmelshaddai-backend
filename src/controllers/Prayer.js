import Prayer from '../models/Prayer';

class PrayerController {
  async index(req, res) {
    try {
      const prayers = await Prayer.findAll({
        attributes: ['id', 'name', 'email', 'tel', 'text', 'created_at'],
        order: [['id', 'DESC']],
      });
      return res.json(prayers);
    } catch (err) {
      if (err.errors) return res.status(400).json({ errors: err.errors.map((e) => e.message) });
      return res.status(400).send(err);
    }
  }

  async store(req, res) {
    try {
      const prayer = await Prayer.create(req.body);
      return res.json(prayer);
    } catch (err) {
      if (err.errors) return res.status(400).json({ errors: err.errors.map((e) => e.message) });
      return res.status(400).send(err);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ error: ['ID missing'] });
      const prayer = await Prayer.findByPk(id);
      if (!prayer) return res.status(400).json({ error: ['ID missing'] });
      await prayer.destroy();
      return res.json({ prayerDeleted: true });
    } catch (err) {
      if (err.errors) return res.status(400).json({ errors: err.errors.map((e) => e.message) });
      return res.status(400).send(err);
    }
  }
}

export default new PrayerController();
