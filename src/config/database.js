const Sequelize = require('sequelize');
require('dotenv').config();

const { DB_URL} = process.env;

const sequelize = new Sequelize(`${DB_URL}`);
sequelize.options.logging = false;

const { DB_URL: url } = process.env;

module.exports = {
  sequelize,
  Sequelize,
  development: {
    url
  },
  test: {
    url
  },
  production: {
    url
  }
};
