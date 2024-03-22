const moment = require('moment');
const {Product} = require('../models/productModel');
const {DynamicProperties} = require('../models/dynamicPropertiesModel');
const createProduct = async (req,res)=>{
    try{
        const {name,description,owner_id,dynamic_properties} = req.body;
        const product = await Product.findOne({where:{name:name}});
        if(!product){
            const newProduct = await Product.create({
                name:name,
                description:description,
                owner_id:owner_id
            });
            newProduct.save();
            console.log(newProduct.id);

            const createdDynamicProperties = [];
            dynamic_properties.forEach(async property => {
            const createdProperty = await DynamicProperties.create({
                name: property.name,
                value_type: property.value_type,
                value: property.value,
                ProductId: newProduct.id // Associate with the newly created product
            });
            createdDynamicProperties.push(createdProperty);
        });
        }
        else{
            const existingProduct = await Product.update(
                {description:description,owner_id:owner_id},{where:{name:name}
            });
            const createdDynamicProperties = [];
            dynamic_properties.forEach(async property => {
            const createdProperty = await DynamicProperties.create({
                name: property.name,
                value_type: property.value_type,
                value: property.value,
                ProductId: existingProduct.id // Associate with the newly created product
            });
            createdDynamicProperties.push(createdProperty);
        });
        }
        res.status(200).json(existingProduct,createdProperty);
    }catch(error){
        return res.status(500).json({error:error.message});
    }
}
const getAllProducts = async (req,res)=>{        
        try {
            const recLimit=req.query.limit || 10;
            const pageNumber=req.query.page || 1;            
            let count= await Product.count();    
            let totalPages=Math.ceil(count/recLimit);   
            let productsList= await Product.findAll({
            offset:(pageNumber-1)*recLimit,
            limit:recLimit,
            });
            const formattedProducts = productsList.map(({ createdAt, updatedAt, ...Product }) => ({
            ...Product,
            createdAt: moment(createdAt).format("MMM Do YY"),
            updatedAt: moment(updatedAt).format("MMM Do YY"),
          }));
           res.status(200).json({totalPages:totalPages,totalCount:count,items:formattedProducts});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

const getById = async (req,res)=>{
    const {product_id} = req.query;
    try{
       const product = await Product.findOne({where:{product_id:product_id}});
       if(!product){
            return res.status(404).json({error:'product not found'});
       }
       return res.status(200).json(product);
    }catch(error){
        return res.status(500).json({error:error.message});
    }
}
const updateById = async (req,res)=>{
    const {product_id} = req.query;
    const {name,description,owner_id}=req.body;
    try{
        const product = await Product.findOne({where:{product_id:product_id}});
        if(!product){
            return res.status(404).json({error:'product not found'});
        }
        // product.name=name;
        // product.description=description;
        // product.owner_id=owner_id;
        const updatedProduct = await Product.update({name,description,owner_id},{where:{product_id:product_id}});
        // product.save();
        return res.status(200).json({message:'product updated successfully'});
    }catch(error){
        return res.status(500).json({error:error.message});
    }
}
const deleteProduct = async (req,res)=>{
        const {product_id} = req.query;
    try{
        const product = await Product.findOne({where:{product_id:product_id}});
        if(!product){
            return res.status(404).json({error:'product not found'});
        }
        const _product = await Product.destroy({where:{product_id:product_id}});
        return res.status(200).json({message:'product deleted successfully..'});
    }catch(error){
        return res.status(500).json({error:error.message});
    }
}
module.exports = {getAllProducts,getById,createProduct,updateById,deleteProduct};