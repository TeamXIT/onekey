const { Sequelize } = require('sequelize');
const { parsePhoneNumberFromString } = require('libphonenumber-js');
const jwt = require('jsonwebtoken');
const { baseResponses } = require('../helpers/baseResponses');
const { User } = require('../models/userModel');
const { Role } = require('../models/roleModel');
const { generateOTP, verifyOTP } = require('../helpers/otpGeneration');
const { response } = require('express');

const validatePhoneNumber = (mobileNumber) => {
    const phoneNumber = parsePhoneNumberFromString(mobileNumber);
    if (phoneNumber && phoneNumber.isValid()) {
        return { valid: true, phoneNumber };
    } else {
        return { valid: false, response: 'Invalid phone number' };
    }
}
const sendOtp = async (req, res) => {
    try {
        const { mobileNumber } = req.body;
        const user = await User.findOne({ where: { mobileNumber: mobileNumber } });
        if (!user) {
            const { valid, response, phoneNumber } = validatePhoneNumber(mobileNumber);
            if (!valid) {
                return res.status(400).json({ response });
            }
            const { otp } = await generateOTP(phoneNumber.number, 6, 600);
            // await sendMessage(`Your login OTP is ${otp}`, phoneNumber.number);
            return res.status(200).json({ otp, phoneNumber });
        }
        return res.status(400).json(baseResponses.constantMessages.USER_EXISTS());

    } catch (error) {
        return res.status(500).json(baseResponses.error(error.message));
    }
};
const otpVerification = async (req, res) => {
    try {
        const { mobileNumber, otp } = req.body;
        if (!mobileNumber || !otp) {
            return res.status(400).json(baseResponses.constantMessages.INVALID_OTP());
        }
        const { valid, response, phoneNumber } = validatePhoneNumber(mobileNumber);
        if (!valid) {
            return res.status(400).json({ response });
        }
        const { success, message } = await verifyOTP(phoneNumber.number, otp);
        if (!success) {
            return res.status(400).json(baseResponses.constantMessages.INVALID_OTP());
        }
        const newUser = await User.create({ mobileNumber });
        newUser.save();
        return res.status(200).json(baseResponses.constantMessages.OTP_VERIFIED());
    } catch (error) {
        return res.status(500).json(baseResponses.error(error.message));
    }
};
const setPassword = async (req, res) => {
    try {
        const { mobileNumber, password, confirmPassword } = req.body;
        if (!mobileNumber || !password || !confirmPassword) {
            return res.status(400).json(baseResponses.constantMessages.ALL_FIELDS_REQUIRED());
        }
        const user = User.findOne({where:{mobileNumber:mobileNumber}});
        if(!user) {
            return res.status(404).json(baseResponses.constantMessages.USER_NOT_FOUND());
        }
        if(password!=confirmPassword){
            return res.status(400).json(baseResponses.constantMessages.PASSWORD_MISMATCH());
        }
        const updatePassword = await User.update({password:password},{where:{mobileNumber:mobileNumber}});
        return res.status(200).json('updatePassword');
    }catch (error){
        return res.status(500).json(baseResponses.error(error.message));
    }
}
// const signUp = async (req, res) => {
//     try{
//         const {mobileNumber} = req.body;
//         if(!mobileNumber){
//             return res.status(400).json(baseResponses.constantMessages.INVALID_MOBILE_NUMBER());
//         }
//         const {otp} =
//     }
// };


const selectRole = async (req, res) => {
    try {
        const {
            mobileNumber,
            roleIdOrroleName
        } = req.body;
        const user = await User.findOne({
            where: { mobileNumber: mobileNumber }
        });
        if (!user) {
            return res.status(404).json(baseResponses.constantMessages.USER_NOT_FOUND());
        }
        let existingRole;
        //if user enters role name 
        if (isNaN(roleIdOrroleName)) {
            existingRole = await Role.findOne({
                where: { role_name: roleIdOrroleName }
            });
        }
        //if user enters role id
        else {
            existingRole = await Role.findOne({
                where: { role_id: roleIdOrroleName }
            });
        }
        //if user entered role is not a valid role
        if (!existingRole) {
            return res.status(404).json(baseResponses.constantMessages.INVALID_ROLE());
        }
        let userrole_id = existingRole.role_id
        let user_id=user.user_id
        //updating the role_id of user 
        const assignedRole = await User.update({ role_id: userrole_id }, { where: { mobileNumber: mobileNumber } });
        // let _secret = process.env.JWT_SECRET || 'rajasekhar-secret-key';
        return res.status(200).json(baseResponses.constantMessages.ROLE_SELECTED());
    } catch (error) {
        return res.status(500).json(baseResponses.error(error.message));
    }
}

// const signIn = async (req, res) => {
//     try {
//         const {
//             username,
//             password
//         } = req.body;
//         if (!username || !password) {
//             return res.status(400).json(baseResponses.constantMessages.ALL_FIELDS_REQUIRED());
//         }
//         if (username.length < 4) {
//             return res.status(400).json(baseResponses.constantMessages.USERNAME_LENGTH_ERROR());
//         }
//         if (password.length < 8) {
//             return res.status(400).json(baseResponses.constantMessages.PASSWORD_LENGTH_ERROR());
//         }

//         if (!/[A-Z]/.test(password)) {
//             return res.status(400).json(baseResponses.constantMessages.PASSWORD_UPPERCASE_ERROR());
//         }

//         if (!/[a-z]/.test(password)) {
//             return res.status(400).json(baseResponses.constantMessages.PASSWORD_LOWERCASE_ERROR());
//         }

//         if (!/\d/.test(password)) {
//             return res.status(400).json(baseResponses.constantMessages.PASSWORD_NUMBER_ERROR());
//         }

//         if (!/[^A-Za-z0-9]/.test(password)) {
//             return res.status(400).json(baseResponses.constantMessages.PASSWORD_SYMBOL_ERROR());
//         }
//         const user = await User.findOne({
//             where: { username },
//         });
//         if (!user) {
//             return res.status(404).json(baseResponses.constantMessages.USER_NOT_FOUND());
//         }
//         if (user.role_id==null) {
//             return res.status(400).json(baseResponses.constantMessages.ROLE_NOT_FOUND_ERROR());
//         }
//         if (password !== user.password) {
//             return res.status(400).json(baseResponses.constantMessages.WRONG_PASSWORD());
//         }
//         let user_id=user.user_id;
//         let _secret = process.env.JWT_SECRET || 'rajasekhar-secret-key';
//         const token = jwt.sign({ username, user_id, role: user.role_id }, _secret, { expiresIn: '1h' });
//         return res.status(200).json(baseResponses.constantMessages.LOGIN_SUCCESSFUL({ token, user_id }));

//     } catch (error) {
//         res.status(500).json(baseResponses.error(error.message));
//     }
// }

module.exports = { sendOtp, otpVerification, setPassword,selectRole};
