const sequelize = require('../config/db');
const DataTypes = require('sequelize');
const {Product} = require('./productModel');
const DynamicProperties = sequelize.define("DynamicProperty",{
    name:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    value_type:{
        type:DataTypes.STRING,
        allowNull:false
    },
    value:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    product_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:Product,
            key:'product_id'
        }
    }
},{timestamps:true});

// DynamicProperties.sync({force:true});

module.exports = {DynamicProperties};