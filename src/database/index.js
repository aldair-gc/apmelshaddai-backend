import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import Post from '../models/Post';
import User from '../models/User';

const models = [Post, User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
