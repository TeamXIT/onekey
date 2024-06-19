const express = require('express');
const { insertBpoDetails, updateBpoDetails }= require('../controllers/bpoController');
const router = express.Router();
router.post('/create',insertBpoDetails);
router.put('/update',updateBpoDetails);
module.exports = router;