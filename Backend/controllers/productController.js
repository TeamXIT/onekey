const moment = require('moment');
const { Product } = require('../models/productModel');
const { DynamicProperties } = require('../models/dynamicPropertiesModel');
const { baseResponses } = require('../helpers/baseResponses');
const {flatVillas} = require('../helpers/flats&villas');
const {openPlot} = require('../helpers/open_plot');

const createProduct = async (req, res) => {
    try {
        const { projectName, propertySeller, propertyType, dynamic_properties, owner_id } = req.body;

        let product = await Product.findOne({ where: { projectName: projectName } });
        if (!product) {
            product = await Product.create({
                projectName,
                propertySeller,
                propertyType,
                owner_id
            });
        } else {
            await Product.update(
                { propertySeller, owner_id },
                { where: { projectName: projectName } }
            );

            product = await Product.findOne({ where: { projectName: projectName } });
        }

        const createdDynamicProperties = [];

        for (const asset of dynamic_properties) {
            try {
                const valueType = asset.value_type.toLowerCase();
                if (valueType.includes('image') || valueType.includes('video') || valueType.includes('file')) {
                    const createAsset = await DynamicProperties.create({
                        name: asset.name,
                        value_type: valueType,
                        value: asset.value,
                        product_id: product.projectId
                    });
                    createdDynamicProperties.push(createAsset);
                }
            } catch (error) {
                console.log(error);
            }
        }

        for (const property of dynamic_properties) {
            const createdProperty = await DynamicProperties.create({
                name: property.name,
                value_type: property.value_type,
                value: property.value,
                product_id: product.projectId // Use the projectId obtained from product
            });
            createdDynamicProperties.push(createdProperty);
        }

        res.status(200).json(baseResponses.constantMessages.PRODUCT_CREATE_SUCCESSFUL());
    } catch (error) {
        return res.status(500).json(baseResponses.error(error.message));
    }
};

const getAllProducts = async (req, res) => {
    try {
        const recLimit = parseInt(req.query.limit) || 10;
        const pageNumber = parseInt(req.query.page) || 1;
        const count = await Product.count();
        const totalPages = Math.ceil(count / recLimit);
        const productsList = await Product.findAll({
            offset: (pageNumber - 1) * recLimit,
            limit: recLimit,
        });

        const formattedProducts = await Promise.all(productsList.map(async product => {
            const dynamic_properties = await DynamicProperties.findAll({ where: { product_id: product.projectId } });
            return {
                ...product.toJSON(),
                createdAt: moment(product.createdAt).format("MMM Do YY"),
                updatedAt: moment(product.updatedAt).format("MMM Do YY"),
                dynamicProperties: dynamic_properties.map(({ createdAt, updatedAt, ...property }) => ({
                    ...property,
                    createdAt: moment(createdAt).format("MMM Do YY"),
                    updatedAt: moment(updatedAt).format("MMM Do YY"),
                })),
            };
        }));

        res.status(200).json(baseResponses.constantMessages.GET_ALL_PRODUCT_SUCCESSFUL({
            totalPages,
            totalCount: count,
            items: formattedProducts
        }));
    } catch (error) {
        res.status(500).json(baseResponses.error(error.message));
    }
};

const getById = async (req, res) => {
    const product_id = Number(req.query.product_id);
    try {
        const product = await Product.findOne({ where: { projectId: product_id } });
        if (!product) {
            return res.status(404).json(baseResponses.constantMessages.PRODUCT_NOT_FOUND());
        }
        const dynamicproperties = await DynamicProperties.findAll({ where: { product_id: product_id } });
        return res.status(200).json(baseResponses.constantMessages.GET_PRODUCT_BY_ID_SUCCESSFUL(product, dynamicproperties));
    } catch (error) {
        return res.status(500).json(baseResponses.error(error.message));
    }
};

const updateProduct = async (req, res) => {
    try {
        const { projectName, propertySeller, propertyType, dynamic_properties, owner_id } = req.body;
        let product = await Product.findOne({ where: { projectName: projectName } });
        if (!product) {
            return res.status(404).json(baseResponses.constantMessages.PRODUCT_NOT_FOUND());
        }

        await Product.update(
            { propertySeller, owner_id, propertyType },
            { where: { projectName: projectName } }
        );

        product = await Product.findOne({ where: { projectName: projectName } });

        const oldDynamicProperties = await DynamicProperties.findAll({ where: { product_id: product.projectId } });

        // Updating existing properties and removing those not present in the update payload
        for (let property of oldDynamicProperties) {
            const matchingProperty = dynamic_properties.find(prop => prop.name === property.name);

            if (matchingProperty) {
                await DynamicProperties.update(
                    {
                        value_type: matchingProperty.value_type,
                        value: matchingProperty.value,
                    },
                    { where: { name: matchingProperty.name, product_id: product.projectId } }
                );
            } else {
                await DynamicProperties.destroy({ where: { name: property.name, product_id: product.projectId } });
            }
        }
        for (let property of dynamic_properties) {
            const existingProperty = oldDynamicProperties.find(prop => prop.name === property.name);
            if (!existingProperty) {
                await DynamicProperties.create({
                    name: property.name,
                    value_type: property.value_type,
                    value: property.value,
                    product_id: product.projectId
                });
            }
        }

        const updatedDynamicProperties = await DynamicProperties.findAll({ where: { product_id: product.projectId } });

        res.status(200).json(baseResponses.constantMessages.PRODUCT_UPDATE_SUCCESSFUL(updatedDynamicProperties, oldDynamicProperties));
    } catch (error) {
        return res.status(500).json(baseResponses.error(error.message));
    }
};


const deleteProduct = async (req, res) => {
    const projectId = Number(req.query.projectId);
    try {
        const product = await Product.findOne({ where: { projectId: projectId } });
        if (!product) {
            return res.status(404).json(baseResponses.constantMessages.PRODUCT_NOT_FOUND());
        }
        await DynamicProperties.destroy({ where: { product_id: projectId } });

        await Product.destroy({ where: { projectId: projectId } });

        return res.status(200).json(baseResponses.constantMessages.PRODUCT_DELETE_SUCCESSFUL());
    } catch (error) {
        return res.status(500).json(baseResponses.error(error.message));
    }
};

const getPropertyType = async (req, res) => {
    try {
        const {  propertyType } = req.body;
        if ( !propertyType) {
            return res.status(400).json(baseResponses.constantMessages.ALL_FIELDS_REQUIRED());
        }
        const _propertyType = propertyType.toLowerCase();
        if(_propertyType == 'villas'|| _propertyType == 'flats'){
            return res.status(200).json(flatVillas);
        }
        else if (_propertyType == 'openplots'){
            return res.status(200).json(openPlot);
        }
    } catch (error) {
        return res.status(500).json(baseResponses.error(error.message));
    }
};


module.exports = { getAllProducts, getById, createProduct, deleteProduct, updateProduct,getPropertyType };