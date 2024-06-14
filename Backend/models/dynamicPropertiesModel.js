const sequelize = require('../config/db');
const DataTypes = require('sequelize');
const {Product} = require('./productModel');

const DynamicProperties = sequelize.define("DynamicProperty",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    value_type:{
        type:DataTypes.STRING,
        allowNull:false
    },
    value:{
        type:DataTypes.JSON,
        allowNull:false
    },
    product_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:Product,
            key:'projectId'
        }
    }
},{sequelize, tableName: 'DynamicProperties',versionKey:false,timestamps:false});

module.exports = {DynamicProperties};