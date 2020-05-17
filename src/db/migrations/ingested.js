
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('ingested', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      record: {
        allowNull: true,
        type: Sequelize.INTEGER
      }

    });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('ingested');
  }
};
