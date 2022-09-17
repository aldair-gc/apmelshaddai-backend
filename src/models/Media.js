import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/app';

export default class Media extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'This field cannot be empty',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'This field cannot be empty',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/medias/${this.getDataValue('filename')}`;
        },
      },
    }, {
      sequelize,
      tableName: 'media',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Post, { foreignKey: 'post_id' });
  }
}
