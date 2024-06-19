const express = require('express');
const { getAllProducts, getById, createProduct, deleteProduct, updateProduct, getPropertyType } = require('../controllers/productController');
const {verifyJWT} = require('../middlewares/jwt');
const {checkRoleAccess} = require('../middlewares/checkRoleAccess');
const router = express.Router();
router.post('/create',createProduct);
router.get('/get-all',getAllProducts);
router.get('/get-by-id',getById);
router.put('/update',updateProduct);
router.delete('/delete',deleteProduct);
router.get('/get-property-type',getPropertyType);

module.exports = router;