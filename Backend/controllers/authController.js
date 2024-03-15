const { Sequelize } = require('sequelize');
const jwt = require('jsonwebtoken');
require('dotenv');
const {User} = require('../models/userModel');
const signUp = async (req,res)=>{
    try {
        const {
            username,
            email,
            password,
            confirmPassword
        }=req.body;
        if(!username || !email || !password || !confirmPassword){
            return res.status(400).json({error:'All fields are required'});
        }
        if(password !== confirmPassword){
            return res.status(400).json({error:'Password do not match'});
        }
        const existingUser = await User.findOne({
           where: Sequelize.or({username},{email})
        });
        if(existingUser){
            return res.status(400).json({error:'Username or email already exists'});
        }
        const newUser = await User.create({
            username,
            email,
            password
        });
        newUser.save();
        return res.status(200).json({message:'User registered successfully'});
    }catch(error){
        return res.status(500).json({error:error.message});
    }
} 

const selectRole = async (req,res)=>{
    try{
        const {
            username,
            role_id
        }=req.body;
        const user = await User.findOne({
            where: {username}
        });
        if(!user){
            return res.status(404).json({error:'User not found'});
        }
        const assignedRole = await User.update({role_id:role_id},{where:{username:username}});
        let _secret=process.env.JWT_SECRET || 'rajasekhar-secret-key';
        const token = jwt.sign({username,role_id},_secret,{expiresIn:'1h'});
        return res.status(200).json({message:'User role selected successfully',token});
    }catch(error){
        return res.status(500).json({error:error.message});
    }
}

const signIn = async (req,res)=>{
    try{
        const {
            username,
            password
        }=req.body;
        if(! username || ! password){
            return res.status(400).json({error:'All fields are required'});
        }
        const user = await User.findOne({
            where: {username},
        });
        if(!user){
            return res.status(404).json({error:'User not found'});
        }
        if(password !== user.password){
            return res.status(400).json({error:'Wrong password'});
        }
        let _secret=process.env.JWT_SECRET || 'rajasekhar-secret-key';
        const token = jwt.sign({username,role:user.role},_secret,{expiresIn:'1h'});
        return res.status(200).json({message:'Login successfull',token});

    }catch(error){
        res.status(500).json({error:error.message});
    }
}
module.exports = {signUp,selectRole,signIn};