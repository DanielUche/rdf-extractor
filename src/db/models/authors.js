
const { sequelize, Sequelize } = require('../../config/database');

const Author = sequelize.define('author', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  a_id: {
    type: Sequelize.UUID,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  death_year: {
    type: Sequelize.STRING,
    allowNull: true
  },
  birth_year: {
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
  tableName: 'authors',
  sequelize
});


module.exports = Author;
