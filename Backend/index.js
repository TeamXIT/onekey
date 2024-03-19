const express = require('express');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const dynamicPropertiesRoutes = require('./routes/dynamicPropertiesRoutes');
const { DynamicProperties } = require('./models/dynamicPropertiesModel');
// const {createUser} = require('./models/userModel');
const port = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// createUser();
app.use('/api/auth',authRoutes);
app.use('/api/product',productRoutes);
app.use('/api/dynamicProperties',dynamicPropertiesRoutes);
app.get('/',(req,res)=>{
    res.json("Welcome to onekey...");
});
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});