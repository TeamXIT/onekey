const sequelize = require('../config/db');
const Datatypes = require('sequelize');
const { User } = require('./roleModel');

const Product = sequelize.define("Products", {
    product_id: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Datatypes.STRING(100),
        allowNull: false
    },
    description: {
        type: Datatypes.TEXT
    },
    owner_id: {
        type: Datatypes.INTEGER,
        allowNull: false,
        references: {
            model: User, // Referenced table name
            key: 'user_id',
        }
    },
    isBpoAccepted:{
        type: Datatypes.BOOLEAN,
        defaultValue:false
    },
    isLawyerAccepted:{
        type: Datatypes.BOOLEAN,
        defaultValue:false
    },
    isCompleted:{
        type: Datatypes.BOOLEAN,
        defaultValue:false
    },
    isPending:{
        type: Datatypes.BOOLEAN,
        defaultValue:true
    }
}, { tableName: 'Products', versionKey: false, timestamps: false });

module.exports = { Product };