import Sequelize, { Model } from 'sequelize';

export default class Post extends Model {
  static init(sequelize) {
    super.init({
      group: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      title: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      text: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Media, { foreignKey: 'post_id' });
    this.hasMany(models.Link, { foreignKey: 'post_id' });
  }
}
