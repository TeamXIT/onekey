const moment = require('moment');
const {Product} = require('../models/productModel');
const {DynamicProperties} = require('../models/dynamicPropertiesModel');

const createProduct = async (req, res) => {
    try {
        const { name, description, owner_id, dynamic_properties } = req.body;
        
       let  product = await Product.findOne({ where: { name: name } });
        if (!product) {
            // Create a new product if it doesn't exist
            product = await Product.create({
                name: name,
                description: description,
                owner_id: owner_id
            });
        } else {
            product = await Product.update(
                { description: description, owner_id: owner_id },
                { where: { name: name } }
            );
            
        }
        product=await Product.findOne({ where: { name: name } });
     
       const createdDynamicProperties = [];
        dynamic_properties.forEach(async (property) => {
            const createdProperty = await DynamicProperties.create({
                name: property.name,
                value_type: property.value_type,
                value: property.value,
                product_id: product.product_id // Use the product_id obtained from product
            });
            createdDynamicProperties.push(createdProperty);
        });
        res.status(200).json({ message:'Created Successfully'});
    } catch (error) {
        return res.status(500).json({ error: error.message });
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
       const dynamicproperties = await DynamicProperties.findAll({where:{product_id:product_id}});
       if(!product || !dynamicproperties){
            return res.status(404).json({error:'product not found'});
       }
       return res.status(200).json(product,dynamicproperties);
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
        const dynamic_properties = await DynamicProperties.destroy({where:{product_id:product_id}});
        const _product = await Product.destroy({where:{product_id:product_id}});
        return res.status(200).json({message:'product deleted successfully..'});
    }catch(error){
        return res.status(500).json({error:error.message});
    }
}
module.exports = {getAllProducts,getById,createProduct,deleteProduct};