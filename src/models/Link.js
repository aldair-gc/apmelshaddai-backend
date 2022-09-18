import Sequelize, { Model } from 'sequelize';

export default class Link extends Model {
  static init(sequelize) {
    super.init({
      url: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'This field cannot be empty',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'links',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Post, { foreignKey: 'post_id' });
  }
}
