module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('posts', 'text', {
      type: Sequelize.STRING(10000),
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('posts', 'text', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
};
