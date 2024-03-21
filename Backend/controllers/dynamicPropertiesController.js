const {DynamicProperties} = require('../models/dynamicPropertiesModel');
const createDynamicProperty = async (req,res)=>{
    try{
        const {
            name,
            value_type,
            value,
            product_id
        }=req.body;
        let unit = value_type.toLowerCase();
        let convertedValue;
        switch(unit){
            case 'yards':
                convertedValue = value*0.9144; //convert yards into meters
                break;
            case 'cents':
                convertedValue = value*40.4686; //convert cents into meters
                break;
            case 'squareFeet':
                convertedValue = value*0.3048; //convert squareFeet into meters
                break;
            case 'gajas':
                convertedValue = value*0.9114; //convert gajas into meters 
                break;
            default :
                res.status(404).json({error:'Invalid value type'});
        }
        const newDynamicProperty = await DynamicProperties.create({
            name:name,
            value_type:unit,
            value:convertedValue,
            product_id:product_id
        });
        newDynamicProperty.save().then(()=>{
            res.status(200).json('Inserted successfully');
        });
        
    }catch(error){
        res.status(500).json({error:error.message});
    }
}
const getAllDynamicProperties =  async (req,res)=>{
    try{
        const dynamicPropeties = await DynamicProperties.findAll();
        return res.status(200).json(dynamicPropeties);
    }catch(error){
        res.status(500).json({error:error.message});
    }
}
const getDynamicPropertiesById = async (req,res)=>{
    const {id} = req.query;
    try{
        const dynamicProperty = await DynamicProperties.findByPk(id);
        if(!dynamicProperty){
            return res.status(404).json({error:'Dynamic property not found'});
        }
        return res.status(200).json(dynamicProperty);
    }catch(error){
        res.status(500).json({error:error.message});
    }
}
const updateDynamicProperty = async(req,res)=>{

}
const deleteDynamicProperty = async (req,res)=>{
    const {id} = req.query;
    try{
        const dynamicProperty = await DynamicProperties.findByPk(id);
        if(!dynamicProperty){
            return res.status(404).json({error:'Dynamic property not found'});
        }
        const _dynamicProperty = await DynamicProperties.destroy({where:{id}});
        return res.status(200).json({message:'Dynamic property deleted successfully..'});
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

module.exports = {createDynamicProperty,getAllDynamicProperties,getDynamicPropertiesById,updateDynamicProperty,deleteDynamicProperty};