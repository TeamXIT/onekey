const express = require('express');
const { getAllProducts, getById, createProduct, updateById, deleteProduct } = require('../controllers/productController');
const {verifyJWT} = require('../middlewares/jwt');
const {checkRoleAccess} = require('../middlewares/checkRoleAccess');
const router = express.Router();
router.post('/create',verifyJWT,checkRoleAccess,createProduct);
router.get('/getAllProducts',verifyJWT,checkRoleAccess,getAllProducts);
router.get('/getById',verifyJWT,checkRoleAccess,getById);
router.put('/update',verifyJWT,checkRoleAccess,updateById);
router.delete('/delete',verifyJWT,checkRoleAccess,deleteProduct);

module.exports = router;