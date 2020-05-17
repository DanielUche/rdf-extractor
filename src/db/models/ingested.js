
const { sequelize, Sequelize } = require('../../config/database');

const Ingested = sequelize.define('ingested', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  record: {
    allowNull: false,
    type: Sequelize.INTEGER
  }
}, {
  tableName: 'ingested',
  timestamps: false,
  sequelize
});


module.exports = Ingested;
