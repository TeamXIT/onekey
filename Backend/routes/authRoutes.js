const express = require('express');
const { signUp, selectRole, signIn } = require('../controllers/authController');
const router = express.Router();
router.post('/sign-up', signUp);
router.post('/select-role', selectRole);
router.post('/sign-in', signIn);

module.exports = router;