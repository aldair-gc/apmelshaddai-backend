import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, cb) => {
    if (file.extname !== 'jpg'
      && file.extname !== 'jpeg'
      && file.extname !== 'gif'
      && file.extname !== 'png'
      && file.extname !== 'mov'
      && file.extname !== 'mpg'
      && file.extname !== 'mpeg'
      && file.extname !== 'avi'
      && file.extname !== 'wmv'
      && file.extname !== 'ogg'
      && file.extname !== 'mp4'
      && file.extname !== 'webm'
      && file.extname !== 'mid'
      && file.extname !== 'midi'
      && file.extname !== 'wma'
      && file.extname !== 'aac'
      && file.extname !== 'wav'
      && file.extname !== 'mp3') {
      return cb(new multer.MulterError('Invalid file type'));
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'media'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
