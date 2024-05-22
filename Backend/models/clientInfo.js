const sequelize = require('../config/db');
const Datatypes = require('sequelize');
const Products =require('../models/products');
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
    }
}, { tableName: 'Products', versionKey: false, timestamps: false });

module.exports =ClientInfo