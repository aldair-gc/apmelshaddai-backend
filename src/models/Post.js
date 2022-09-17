import Sequelize, { Model } from 'sequelize';

export default class Post extends Model {
  static init(sequelize) {
    super.init({
      group: Sequelize.STRING,
      title: Sequelize.STRING,
      text: Sequelize.STRING,
    }, {
      sequelize,
    });
    return this;
  }
}
