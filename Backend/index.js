const express = require('express');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const port = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/auth',authRoutes);
app.get('/',(req,res)=>{
    res.json("Welcome to onekey...");
});
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});