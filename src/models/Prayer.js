import Sequelize, { Model } from 'sequelize';

export default class Prayer extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [0, 255],
            msg: 'You name field caracters limit is exceded',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      tel: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [0, 255],
            msg: 'Invalid phone number',
          },
        },
      },
      text: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [0, 30000],
            msg: 'Your message is too long',
          },
        },
      },
    }, {
      sequelize,
    });

    return this;
  }
}
