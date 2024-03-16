const express = require('express');
const { getAllProducts, getById, createProduct, updateById, deleteProduct } = require('../controllers/productController');
const router = express.Router();
router.post('/create',createProduct);
router.get('/getAllProducts',getAllProducts);
router.get('/getById',getById);
router.put('/update',updateById);
router.delete('/delete',deleteProduct);

module.exports = router;