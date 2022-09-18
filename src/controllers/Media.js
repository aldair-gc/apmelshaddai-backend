import multer from 'multer';
import multerConfig from '../config/multer';

import Media from '../models/Media';

const upload = multer(multerConfig).single('media');

class MediaController {
  store(req, res) {
    return upload(req, res, async (er) => {
      if (er) return res.status(400).json({ errors: [er.code] });
      try {
        const { originalname, filename } = req.file;
        const { post_id } = req.body;
        const media = await Media.create({ originalname, filename, post_id });

        return res.json(media);
      } catch (err) {
        if (err.errors) return res.status(400).json({ errors: err.errors.map((e) => e.message) });
        return res.status(400).send(err);
      }
    });
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ error: ['ID missing'] });
      await Media.destroy({ where: { post_id: id } });
      return res.json({ mediaDeleted: true });
    } catch (err) {
      if (err.errors) return res.status(400).json({ errors: err.errors.map((e) => e.message) });
      return res.status(400).send(err);
    }
  }
}

export default new MediaController();
