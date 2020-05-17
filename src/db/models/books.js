
const { sequelize, Sequelize } = require('../../config/database');

const Book = sequelize.define('book', {
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
}, {
  tableName: 'books',
  sequelize
});


module.exports = Book;
