const {User} = require('../models/userModel');
const createAsync = async(req,res)=>{
    try{
        const{
            username,
            email,
            password,
            role
        }=req.body;
        const newUser = await User.create({ 
            username,
            email,
            password,
            role
        });
        newUser.save();
        res.status(200).json('User created successfully');
    }catch(error){
        res.status(500).json({error:error.message});
    }
};

const getAllAsync = async(req,res)=>{
    try{
        const users = await User.findAll();
        res.status(200).json(users);
    }catch(error){
        res.status(500).json({error:error.message});
    }
};

const getByPkAsync = async(req,res) => {
    const userId = req.params.user_id;     
    try {
        const user = await User.findByPk(userId);        
        if(user){
            res.status(200).json(user);
        }else {
            res.status(404).json({ error: 'User not found' });
        }
    }catch(error) {
        res.status(500).json({ error: error.message });
    }
};
const deleteAsync = async(req,res)=>{
    try{
        const userId = req.params.user_id; 
        const user = await User.findByPk(userId);
        if(!user){
            res.status(404).json({ error: 'User not found' });
        }  
        await user.destroy();      
        res.status(200).json('User deleted successfully');
    }catch(error){
        res.status(500).json({ error: error.message });
    }
};
const updateAsync = async(req,res)=>{
    try{
        const userId = req.params.user_id; 
        const {username,email,password,role} = req.body;
        const user= User.update({username,email,password,role},{where:{user_id:userId}});
        if(!user){
           return res.status(404).json('User not found');
        }
        res.status(200).json('User updated successfully');
    }catch(error){
        res.status(500).json({error:error.message});
    }
    
};
module.exports = {createAsync,getAllAsync,getByPkAsync,deleteAsync,updateAsync};