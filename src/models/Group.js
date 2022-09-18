import Sequelize, { Model } from 'sequelize';

export default class Group extends Model {
  static init(sequelize) {
    super.init({
      group: {
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
      tableName: 'groups',
    });
    return this;
  }
}
