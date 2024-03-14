const express = require('express');
const { signUp, selectRole, signIn } = require('../controllers/authController');
const router = express.Router();
router.post('/signup',signUp);
router.post('/selectRole',selectRole);
router.post('/signin',signIn);

module.exports = router;