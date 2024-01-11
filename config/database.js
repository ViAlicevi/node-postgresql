const { Sequelize } = require('sequelize');
const { error } = require('console');
module.exports = new Sequelize( {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD
  });
