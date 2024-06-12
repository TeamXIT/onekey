const sequelize = require('../config/db');
const DataTypes = require('sequelize');
const { Role } = require('./roleModel');
const User = sequelize.define("Users", {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    mobileNumber:{
        type: DataTypes.STRING(20),
        allowNull: true,
        unique: true,

    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: true,
        validate: {
            notNull: false,
            notEmpty: true
        }
    },
    role_id:{
        type:DataTypes.INTEGER,
        allowNull:true,
        references:{
            model:Role,
            key:'role_id'
        }
    },
}, { tableName: 'Users', timestamps: false });
module.exports = { User };