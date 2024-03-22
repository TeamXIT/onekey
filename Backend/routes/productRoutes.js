const express = require('express');
const { getAllProducts, getById, createProduct, deleteProduct, updateProduct } = require('../controllers/productController');
const {verifyJWT} = require('../middlewares/jwt');
const {checkRoleAccess} = require('../middlewares/checkRoleAccess');
const router = express.Router();
router.post('/create',createProduct);
router.get('/get-all',verifyJWT,checkRoleAccess,getAllProducts);
router.get('/get-by-id/:id',verifyJWT,checkRoleAccess,getById);
router.put('/update',verifyJWT,checkRoleAccess,updateProduct);
router.delete('/delete/:id',verifyJWT,checkRoleAccess,deleteProduct);

module.exports = router;