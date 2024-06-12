const express = require('express');
const { getAllProducts, getById, createProduct, deleteProduct, updateProduct } = require('../controllers/productController');
const {verifyJWT} = require('../middlewares/jwt');
const {checkRoleAccess} = require('../middlewares/checkRoleAccess');
const router = express.Router();
router.post('/create',createProduct);
router.get('/get-all',getAllProducts);
router.get('/get-by-id',getById);
router.put('/update',updateProduct);
router.delete('/delete',deleteProduct);

module.exports = router;