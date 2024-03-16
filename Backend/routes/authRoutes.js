const express = require('express');
const { signUp, selectRole, signIn, getAllRoles } = require('../controllers/authController');
const router = express.Router();
router.post('/signup',signUp);
router.get('/getAllRoles',getAllRoles);
router.post('/selectRole',selectRole);
router.post('/signin',signIn);

module.exports = router;