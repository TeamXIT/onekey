const sequelize = require('../config/db');
const DataTypes = require('sequelize');
const Role = sequelize.define("Roles",{
    role_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    role_name:{
        type:DataTypes.STRING(100),
        allowNull:false,
        unique:true
    }
},{timestamps:false});

// const createRole = async () =>{
//     try{
//         await Role.sync({force:true});
//         console.log('Role table created successfully'); 
//     }catch(error){
//         console.error('Error creating role table:',error);
//     }
// }
// createRole();
module.exports = {Role};