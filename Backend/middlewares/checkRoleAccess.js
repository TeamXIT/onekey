const {Role} = require('../models/roleModel');
const checkRoleAccess = async (req,res,next)=>{
     const {user} = req;
     if(!user || !user.role){
        return res.status(404).json({error:'Unauthorized access - role not found token'});
     }
     try{
        const role = await Role.findOne({where:{role_id:user.role}});
        if(!role){
            return res.status(404).json({error:'Role not found'});
        }
        if(role.role_id !==2 && role.role_id !==1){
            return res.status(403).json({error:'Unauthorized access'});
        }
        next();
     }catch(error){
        return res.status(500).json({error:error.message});
     }
}

module.exports = {checkRoleAccess};