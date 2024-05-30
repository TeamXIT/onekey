const sequelize = require('../config/db');
const Datatypes = require('sequelize');
const { User } = require('./roleModel');


const Product = sequelize.define("Products", {
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
    propertyDetails: {
        type: Datatypes.ARRAY([Datatypes.JSON]),
        allowNull: false,
        validate: {
            isPropertyDetailsArray(value) {
                if (!Array.isArray(value)) {
                    throw new Error('Property details must be an array');
                }
                value.forEach(detail => {
                    if (typeof detail.areaInSquareYards !== 'number' ||
                        typeof detail.numberOfPlots !== 'number' ||
                        typeof detail.price !== 'number') {
                        throw new Error('Each property detail must contain numbers for areaInSquareYards, numberOfPlots, and price');
                    }
                });
            }
        }
    },
    propertyDescription: {
        type: Datatypes.TEXT,
        allowNull: false,
        required: false,
    },
    propertyAmenities: {
        type: Datatypes.JSONB,
        defaultValue: {
            "Park": false,
            "HMDA Approval": false,
            "RERA Approved": false,
            "CC Roads": false,
            "Water Supply to each plot": false,
            "Avenue Plantation": false,
            "Electricity with Street Lights": false,
            "Underground Drainage": false,
            "Power Backup": false,
            "CCTV": false,
            "Compound Wall": false,
            "DTCP Approved": false,
            "Entrance Arch": false,
            "BT Roads": false,
            "Community Hall": false,
            "Children's Play Area": false
        },
        allowNull: false
    },
    propertyHighlights: {
        type: Datatypes.TEXT,
        allowNull: false,
        required: false,
    },
    propertyLocation: {
        type: Datatypes.JSONB,
        allowNull: false,
        validate: {
            isValidLocation(value) {
                if (typeof value !== 'object') {
                    throw new Error('Property location must be an object');
                }
                const requiredFields = ['address', 'state', 'city', 'town_village', 'pincode', 'google_maps_latitude', 'google_maps_longitude'];
                for (const field of requiredFields) {
                    if (!(field in value)) {
                        throw new Error(`Missing required field '${field}' in property location`);
                    }
                }
            }
        }
    },
    images:{
        type: Datatypes.ARRAY(Datatypes.STRING),
        allowNull: false,
        required: true,
    },
    websiteLink:{
        type: Datatypes.STRING(100),
        allowNull: false,
        required: true,
    }
}, { tableName: 'Products', versionKey: false, timestamps: false });

module.exports = { Product };