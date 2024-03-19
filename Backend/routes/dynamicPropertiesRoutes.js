const express = require('express');
const { createDynamicProperty, getAllDynamicProperties, getDynamicPropertiesById, deleteDynamicProperty, updateDynamicProperty } = require('../controllers/dynamicPropertiesController');
const router = express.Router();
router.post('/create',createDynamicProperty);
router.get('/getAll',getAllDynamicProperties);
router.get('/getOne',getDynamicPropertiesById);
router.put('/update',updateDynamicProperty);
router.delete('/delete',deleteDynamicProperty);
module.exports = router;