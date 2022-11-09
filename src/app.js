import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import express from 'express';
import cors from 'cors';
// import helmet from 'helmet';

import homeRoutes from './routes/home';
import userRoutes from './routes/user';
import tokenRoutes from './routes/token';
import postRoutes from './routes/post';
import mediaRoutes from './routes/media';
import linkRoutes from './routes/link';
import groupRoutes from './routes/group';
import prayerRoutes from './routes/prayer';

const whiteList = [
  'https://apmes-server.aldairgc.com',
  'https://apmes.aldairgc.com',
  'http://127.0.0.1:4000',
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
    this.app.use('/link/', linkRoutes);
    this.app.use('/group/', groupRoutes);
    this.app.use('/prayer/', prayerRoutes);
  }
}

export default new App().app;
