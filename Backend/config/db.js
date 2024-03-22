const { Sequelize, DataTypes, Model } = require('sequelize');
require('dotenv').config();
const _sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    createDatabaseIfNotExists: true,
    logging: false 
});

try {
    _sequelize.authenticate();
    console.log('Connection has been established successfully');
} catch (error) {
    console.log('Unable to connect to the database', error);
};
module.exports = _sequelize;