import multer from 'multer';
import multerConfig from '../config/multer';

import Media from '../models/Media';

const upload = multer(multerConfig).single('media');

class MediaController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) return res.status(400).json({ errors: [err.code] });
      try {
        const { originalname, filename } = req.file;
        const { post_id } = req.body;
        const media = await Media.create({ originalname, filename, post_id });

        return res.json(media);
      } catch (e) {
        console.log(`\ntest\n\n${e}`);
        return res.status(400).json({ errors: ['this ID does not match a registered post'] });
      }
    });
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ error: ['ID missing'] });
      await Media.destroy({ where: { post_id: id } });
      return res.json({ mediaDeleted: true });
    } catch (e) {
      console.error(e);
      return res.status(400).json({ errors: e.errors.map((er) => er.message) });
    }
  }
}

export default new MediaController();
