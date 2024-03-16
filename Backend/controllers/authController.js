const { Sequelize } = require('sequelize');
const jwt = require('jsonwebtoken');
require('dotenv');
const {User} = require('../models/userModel');
const {Role} = require('../models/roleModel');
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
        // const existingUser = await User.findOne({
        //    where: Sequelize.or({username},{email})
        // });
        const existingUserName = await User.findOne({
            where:{username}
        })
        if(existingUserName){
            return res.status(400).json({error:'Username already exists'});
        }
        const existingEmail = await User.findOne({
            where:{email}
        })
        if(existingEmail){
            return res.status(400).json({error:'Email already exists'});
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
const getAllRoles = async (req,res)=>{
    try{ 
        const roles = await Role.findAll();
        if(!roles){
           return res.status(404).json({error:'Roles not found'});
        }
        return res.status(200).json(roles);

    }catch(error){
        return res.status(500).json({error:error.message});
    }
}

const selectRole = async (req,res)=>{
    try{
        const {
            username,
            roleIdOrroleName
        }=req.body;
        console.log(req.body);
        const user = await User.findOne({
            where: {username:username}
        });
        console.log(user);
        if(!user){
            return res.status(404).json({error:'User not found'});
        }
        let existingRole;
        //if user enter role name 
        if(isNaN(roleIdOrroleName)){
            existingRole = await Role.findOne({
                where:{role_name:roleIdOrroleName}
            });
        }
        //if user enter role id
        else{
            existingRole = await Role.findOne({
                where:{role_id:roleIdOrroleName}
            });
        }
        console.log(existingRole);
        //if user entered role not a valid role
        if(! existingRole){
            return res.status(404).json({error:'Invalid role'});
        }
        let userrole_id=existingRole.role_id
        //updating the role_id of user 
        const assignedRole = await User.update({role_id:userrole_id},{where:{username:username}});
        let _secret=process.env.JWT_SECRET || 'rajasekhar-secret-key';
        const token = jwt.sign({username,userrole_id},_secret,{expiresIn:'1h'});
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
module.exports = {signUp,getAllRoles,selectRole,signIn};