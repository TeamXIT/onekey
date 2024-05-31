const sequelize = require('../config/db');
const Datatypes = require('sequelize');
const { User } = require('./roleModel');


const Product = sequelize.define("Products", {
    projectId:{
        type:Datatypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    projectName: {
        type: Datatypes.STRING(100),
        allowNull: false,
        unique: true,
        required: true,
    },
    propertySeller: {
        type: Datatypes.ENUM('Company', 'Individual'),
        allowNull: false,
        required: true,
    },
    propertyType: {
        type: Datatypes.ENUM('Flats', 'OpenPlots', 'Villas'),
        allowNull: false,
        required: true,
    },
    owner_id: {
        type: Datatypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'user_id',
        }
    },
}, { tableName: 'Products', versionKey: false, timestamps: false });

module.exports = { Product };