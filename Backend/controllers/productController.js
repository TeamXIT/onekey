const moment = require('moment');
const { Product } = require('../models/productModel');
const { DynamicProperties } = require('../models/dynamicPropertiesModel');
const { baseResponses } = require('../helpers/baseResponses');

const createProduct = async (req, res) => {
    try {
        const { name, description, owner_id, assets, dynamic_properties } = req.body;
        console.log(assets)
        let product = await Product.findOne({ where: { name: name } });
        if (!product) {
            // Create a new product if it doesn't exist
            product = await Product.create({
                name: name,
                description: description,
                owner_id: owner_id,
            });
        } else {
            product = await Product.update(
                { description: description, owner_id: owner_id },
                { where: { name: name } }
            );

        }
        product = await Product.findOne({ where: { name: name } });


        const createdDynamicProperties = [];

        for (const asset of assets) {
            try {
                const valueType = asset.value_type.toLowerCase();
                if (valueType.includes('image') || valueType.includes('video') || valueType.includes('file')) {
                    const createAsset = await DynamicProperties.create({
                        name: asset.name,
                        value_type: valueType,
                        value: asset.value,
                        product_id: product.product_id
                    });
                    createdDynamicProperties.push(createAsset);

                }
            } catch (error) {
                console.log(error)
            }
        };
        dynamic_properties.forEach(async (property) => {
            const createdProperty = await DynamicProperties.create({
                name: property.name,
                value_type: property.value_type,
                value: property.value,
                product_id: product.product_id // Use the product_id obtained from product
            });
            createdDynamicProperties.push(createdProperty);
        });

        res.status(200).json(baseResponses.constantMessages.PRODUCT_CREATE_SUCCESSFUL());
    } catch (error) {
        return res.status(500).json(baseResponses.error(error.message));
    }
}
const getAllProducts = async (req, res) => {
    try {
        const recLimit = req.query.limit || 10;
        const pageNumber = req.query.page || 1;
        let count = await Product.count();
        let totalPages = Math.ceil(count / recLimit);
        let productsList = await Product.findAll({
            offset: (pageNumber - 1) * recLimit,
            limit: recLimit,
        });

        const formattedProducts = await Promise.all(productsList.map( async product => {
            const dynamic_properties = await DynamicProperties.findAll({ where: { product_id: product.product_id } });
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

        res.status(200).json(baseResponses.constantMessages.GET_ALL_PRODUCT_SUCCESSFUL({ totalPages: totalPages, totalCount: count, items: formattedProducts }));
    } catch (error) {
        res.status(500).json(baseResponses.error(error.message));
    }
}
const getById = async (req, res) => {
    const product_id = Number(req.query.product_id);
    try {
        const product = await Product.findOne({ where: { product_id: product_id } });
        const dynamicproperties = await DynamicProperties.findAll({ where: { product_id: product_id } });
        if (!product) {
            return res.status(404).json(baseResponses.constantMessages.PRODUCT_NOT_FOUND());
        }
        return res.status(200).json(baseResponses.constantMessages.GET_PRODUCT_BY_ID_SUCCESSFUL(product, dynamicproperties));
    } catch (error) {
        return res.status(500).json(baseResponses.error(error.message));
    }
}

const updateProduct = async (req, res) => {
    try {
        const { name, description, owner_id, dynamic_properties } = req.body;
        let product = await Product.findOne({ where: { name: name } });
        if (!product) {
            return res.status(404).json(baseResponses.constantMessages.PRODUCT_NOT_FOUND());
        }
        else {
            product = await Product.update(
                { description: description, owner_id: owner_id },
                { where: { name: name } }
            );
            product = await Product.findOne({ where: { name: name } });
            let oldDynamicproperties = await DynamicProperties.findAll({ where: { product_id: product.product_id } });
            const existingDynamicProperties = [];
            for (let i = 0; i < oldDynamicproperties.length; i++) {
                const property = oldDynamicproperties[i];
                const matchingProperty = dynamic_properties.find(prop => prop.name === property.name);

                if (matchingProperty) {
                    await DynamicProperties.update(
                        {
                            name: matchingProperty.name,
                            value_type: matchingProperty.value_type,
                            value: matchingProperty.value,
                            product_id: product.product_id
                        },
                        { where: { name: matchingProperty.name } }
                    );
                } else {
                    await DynamicProperties.destroy({ where: { name: property.name } });
                }
            }
            let newDynamicproperties = await DynamicProperties.findAll({ where: { product_id: product.product_id } });

            res.status(200).json(baseResponses.constantMessages.PRODUCT_UPDATE_SUCCESSFUL(newDynamicproperties, oldDynamicproperties));
        }

    } catch (error) {
        return res.status(500).json(baseResponses.error(error.message));
    }
}
const deleteProduct = async (req, res) => {
    const product_id = Number(req.query.product_id);
    try {
        const product = await Product.findOne({ where: { product_id: product_id } });
        if (!product) {
            return res.status(404).json(baseResponses.constantMessages.PRODUCT_NOT_FOUND());
        }
        const dynamic_properties = await DynamicProperties.destroy({ where: { product_id: product_id } });
        const _product = await Product.destroy({ where: { product_id: product_id } });
        return res.status(200).json(baseResponses.constantMessages.PRODUCT_DELETE_SUCCESSFUL());
    } catch (error) {
        return res.status(500).json(baseResponses.error(error.message));
    }
}
const productAcceptance = async (req, res) => {
    const {isAccepted,product_id}=req.body;
    try{
    const product = await Product.findOne({where:{product_id: product_id}});
    if(!product){
        return res.status(404).json(baseResponses.constantMessages.PRODUCT_NOT_FOUND);
    }
    else{
        await Product.update({isAccepted:isAccepted},{where:{product_id: product.product_id}})
        return res.status(200).json(baseResponses.constantMessages.PRODUCT_ACCEPTED_SUCCESSFUL)
    }
    }catch (error){
          return res.status(500).json(baseResponses.error(error.message));
    }
};
module.exports = { getAllProducts, getById, createProduct, deleteProduct, updateProduct, productAcceptance };