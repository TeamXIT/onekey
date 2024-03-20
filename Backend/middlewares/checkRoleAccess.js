const {Role} = require('../models/roleModel');
const checkRoleAccess = async (req,res,next)=>{
     const {user} = req;
     console.log(user);
     if(!user || !user.userrole_id){
        return res.status(404).json({error:'Unauthorized access - role not found token'});
     }
     try{
        const role = await Role.findOne({where:{role_id:user.userrole_id}});
        if(!role){
            return res.status(404).json({error:'Role not found'});
        }
        if(role.role_id !==4){
            return res.status(403).json({error:'Unauthorized access'});
        }
        next();
     }catch(error){
        return res.status(500).json({error:error.message});
     }
}

module.exports = {checkRoleAccess};