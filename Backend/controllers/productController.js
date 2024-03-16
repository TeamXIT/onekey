const {Product} = require('../models/productModel');
const createProduct = async (req,res)=>{
    try{
        const newProduct = await Product.create(req.body);
        newProduct.save();
        res.status(200).json({message:'product created successfully..'});
    }catch(error){
        return res.status(500).json({error:error.message});
    }
}
const getAllProducts = async (req,res)=>{
    try{
        const products = await Product.findAll();
        if(!products){
            return res.status(404).json({error:'product not found'});
        }
        return res.status(200).json(products);
    }catch(error){
        return res.status(500).json({error:error.message});
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