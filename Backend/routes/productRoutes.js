const express = require('express');
const { getAllProducts, getById, createProduct, deleteProduct } = require('../controllers/productController');
const {verifyJWT} = require('../middlewares/jwt');
const {checkRoleAccess} = require('../middlewares/checkRoleAccess');
const router = express.Router();
router.post('/create',verifyJWT,checkRoleAccess,createProduct);
router.get('/getAll',verifyJWT,checkRoleAccess,getAllProducts);
router.get('/getById',verifyJWT,checkRoleAccess,getById);
router.delete('/delete',verifyJWT,checkRoleAccess,deleteProduct);

module.exports = router;