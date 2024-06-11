const express = require('express');
const { sendOtp, otpVerification, setPassword, selectRole, signInWithPassword, } = require('../controllers/authController');
const router = express.Router();
router.post('/sign-up/sendOtp', sendOtp);
router.post('/sign-up/verifyOtp', otpVerification);
router.put('/sign-up/set-password', setPassword);
router.put('/select-role', selectRole);
router.post('/sign-in',signInWithPassword)
// router.post('/sign-in', signIn);

module.exports = router;