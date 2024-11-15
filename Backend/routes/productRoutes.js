const express = require('express');
const { getAllProducts, getById, createProduct, deleteProduct, updateProduct, getPropertyType } = require('../controllers/productController');
const {verifyJWT} = require('../middlewares/jwt');
const {checkRoleAccess} = require('../middlewares/checkRoleAccess');
const router = express.Router();
router.post('/create',verifyJWT,checkRoleAccess,createProduct);
router.get('/get-all',getAllProducts);
router.get('/get-by-id',getById);
router.put('/update',verifyJWT,checkRoleAccess,updateProduct);
router.delete('/delete',verifyJWT,checkRoleAccess,deleteProduct);
router.get('/get-property-type',getPropertyType);

module.exports = router;