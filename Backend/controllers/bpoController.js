const {Bpo} = require('../models/bpoModel');
const {baseResponses} = require('../helpers/baseResponses');
const  insertBpoDetails = async (req,res)=>{
    try{
        const {user_id,nickName,dateOfBirth,qualification,experience,language,image,voice1,voice2,voice3} = req.body;
        if(!user_id  || !nickName || !dateOfBirth || !qualification || !experience || !language || !image || !voice1 || !voice2 || !voice3){
            return res.status(400).json(baseResponses.constantMessages.ALL_FIELDS_REQUIRED());  
        }
        let newBpo = await Bpo.findOne({where:{user_id:user_id}});
        if(!newBpo){
            return res.status(404).json(baseResponses.constantMessages.USER_NOT_FOUND());
        }
        newBpo.save();
        return res.status(200).json(baseResponses.constantMessages.BPO_DETAILS_INSERTED());
    }catch(error){
        return res.status(500).json(baseResponses.error(error.message));
    }
}; 
const updateBpoDetails = async (req,res) => {
    try{
        const {user_id,nickName,dateOfBirth,qualification,experience,language,image,voice1,voice2,voice3} = req.body;
        if(!user_id){
            return res.status(400).json(baseResponses.constantMessages.USER_ID_REQUIRED());  
        }
        let updatedDetails = await Bpo.update({nickName,dateOfBirth,qualification,experience,language,image,voice1,voice2,voice3},{where:{user_id:user_id}});
        return res.status(200).json(baseResponses.constantMessages.BPO_DETAILS_UPDATED());
    }catch(error){
        return res.status(500).json(baseResponses.error(error.message));
    }
};
module.exports = {insertBpoDetails,updateBpoDetails};

