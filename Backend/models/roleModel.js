const sequelize = require('../config/db');
const DataTypes = require('sequelize');
const Role = sequelize.define("Roles", {
    role_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    role_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    }
}, { tableName: 'Roles', timestamps: false });
module.exports = { Role };