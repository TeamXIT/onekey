const express = require('express');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use('/api/auth',authRoutes);


app.get('/',(req,res)=>{
    res.json("Welcome to onekey...");
});
app.listen(port, '192.168.55.107',()=>{
    console.log(`server is running on ${port}`);
});