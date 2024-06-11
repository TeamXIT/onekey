const express = require('express');
require('dotenv');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const productRoutes= require('./routes/productRoutes');
const { User } = require('./models/userModel');
const { Role } = require('./models/roleModel');
const { Leads } = require('./models/leadsModel');
const { Product } = require('./models/productModel');
const {DynamicProperties} = require('./models/dynamicPropertiesModel');

const cors = require('cors');
const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth', authRoutes);
app.use('/api/product',productRoutes);

app.get('/', (req, res) => {
    res.json("Welcome to onekey...");
});
app.listen(port, async () => {
    console.log(`server is running on ${port}`);
    // Define associations between models
    DynamicProperties.belongsTo(Product, { foreignKey: 'product_id' });
    // Leads.belongsTo(Product, { foreignKey: 'product_id' });
    Product.belongsTo(User, { foreignKey: 'owner_id' });
    User.belongsTo(Role, { foreignKey: 'role_id' });
    
    // await sequelize.sync({alter: true,force:true});
    // await sequelize.sync();
});