import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './src/database';

import express from 'express';
import cors from 'cors';
// import helmet from 'helmet';

import homeRoutes from './src/routes/home.js';
import userRoutes from './src/routes/user.js';
import tokenRoutes from './src/routes/token.js';
import postRoutes from './src/routes/post.js';
import mediaRoutes from './src/routes/media.js';

const whiteList = [
  'https://apmelshaddai.aldairgc.com',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    // this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, '..', 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/user/', userRoutes);
    this.app.use('/token/', tokenRoutes);
    this.app.use('/post/', postRoutes);
    this.app.use('/media/', mediaRoutes);
  }
}

export default new App().app;
