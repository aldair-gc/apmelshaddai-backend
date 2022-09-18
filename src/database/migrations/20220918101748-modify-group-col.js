module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => Promise.all([
      queryInterface.changeColumn('posts', 'group', {
        type: Sequelize.INTEGER,
        allowNull: true,
      }, { transaction: t }),
      queryInterface.addConstraint('posts', {
        type: 'FOREIGN KEY',
        fields: ['group'],
        name: 'id',
        allowNull: true,
        references: {
          table: 'groups',
          field: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }, { transaction: t }),
    ]));
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => Promise.all([
      queryInterface.removeConstrait('posts', 'group', { transaction: t }),
      queryInterface.changeColumn('posts', 'group', {
        type: Sequelize.STRING,
        allowNull: false,
      }, { transaction: t }),
    ]));
  },
};
