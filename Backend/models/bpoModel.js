const sequelize = require('../config/db');
const DataTypes = require('sequelize');
const { User } = require('./userModel');

const Bpo = sequelize.define("Bpo",{
    "nickName":{
        type:DataTypes.STRING(100),
        allowNull:false,
    },
    "dateOfBirth":{
        type:DataTypes.DATE,
        allowNull:false,
    },
    "qualification":{
        type:DataTypes.STRING(100),
        allowNull:false,
    },
    "experience":{
        type:DataTypes.STRING(100),
        allowNull:false,
    },
    "language":{
        type:DataTypes.STRING(100),
        allowNull:false,
    },
    "image":{
        type:DataTypes. BLOB,
        allowNull:false,
    },
    "voice1":{
        type:DataTypes.BLOB,
        allowNull:false,
    },
    "voice2":{
        type:DataTypes.BLOB,
        allowNull:false,
    },
    "voice3":{
        type:DataTypes.BLOB,
        allowNull:false,
    },
    "user_id":{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:User,
            key:'user_id'
        }
    }
},{tableName:"Bpo",versionKey: false, timestamps: false });

module.exports = {Bpo};

    
