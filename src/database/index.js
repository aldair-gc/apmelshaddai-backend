import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import Post from '../models/Post';
import User from '../models/User';
import Media from '../models/Media';
import Link from '../models/Link';
import Group from '../models/Group';
import Prayer from '../models/Prayer';

const models = [Post, User, Media, Link, Group, Prayer];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
