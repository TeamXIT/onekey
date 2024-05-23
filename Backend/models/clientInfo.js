const sequelize = require('../config/db');
const Datatypes = require('sequelize');
const {Product} =require('../models/products');
const ClientInfo= require('ClientInfo',{
    name:{
        type:Datatypes.STRING(30),
        require:false
    },
    mobile:{
        type:Datatypes.STRING(30),
        require:false
    },
    email:{
        type:Datatypes.STRING(30),
        require:false
    },
    product_id:{
        type:Datatypes.INTEGER,
        allowNull:false,
        references:{
            model:Product,
            key:'product_id'
        }
    }
}, { tableName: 'Products', versionKey: false, timestamps: false });

module.exports = ClientInfo