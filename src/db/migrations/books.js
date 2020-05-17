
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      publisher: {
        type: Sequelize.STRING,
        allowNull: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: true
      },
      subjects: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true
      },
      authors_id: {
        type: Sequelize.ARRAY(Sequelize.UUID),
        allowNull: true
      },
      publication_date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      licence: {
        type: Sequelize.STRING,
        allowNull: true
      },
      language: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },
  down(queryInterface) {
    return queryInterface.dropTable('books');
  }
};
