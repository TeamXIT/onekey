const sequelize = require('../config/db');
const DataTypes = require('sequelize'); 
const {Role} = require('./roleModel');

const User = sequelize.define("Users",{
    user_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    username:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true, 
        validate: {
          notNull: true,
          notEmpty: true,
          isEmail: true 
        }
      },
    password:{
        type:DataTypes.STRING(100),
        allowNull:false,
        validate:{
            notNull: true,
            notEmpty:true
        }
    },
    role_id:{
        type:DataTypes.INTEGER,
        references:{
            model:Role,
            key:'role_id'

        }
    }
    // role:{
    //     type:DataTypes.ENUM,
    //     values:["admin","telemarketer","agent","product_owner"],
    //     allowNull:true
    // }
},{timestamps:false});
const createUser=async () => {
    try {
      await User.sync({ force: true }); 
      console.log('User table created successfully');
    } catch (error) {
      console.error('Error creating user table:', error);
    } }
// createUser();
module.exports = {User,createUser};