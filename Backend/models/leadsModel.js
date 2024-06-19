const sequelize = require('../config/db');
const DataTypes = require('sequelize');
const { Product } = require('./productModel');
const Leads = sequelize.define("Leads", {
    lead_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    lead_info: {
        type: DataTypes.JSON,
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'productId',
        },
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
},{ tableName: 'Leads', versionKey: false, timestamps: true });


module.exports = { Leads };