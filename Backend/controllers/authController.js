const { Sequelize } = require('sequelize');
const jwt = require('jsonwebtoken');
const { baseResponses } = require('../helpers/baseResponses');
const { User } = require('../models/userModel');
const { Role } = require('../models/roleModel');
const signUp = async (req, res) => {
    try {
        const {
            username,
            email,
            password,
            confirmPassword
        } = req.body;

        if (!username || !email || !password || !confirmPassword) {
            return res.status(400).json(baseResponses.constantMessages.ALL_FIELDS_REQUIRED());
        }
        if (username.length < 4) {
            return res.status(400).json(baseResponses.constantMessages.USERNAME_LENGTH_ERROR());
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return res.status(400).json(baseResponses.constantMessages.EMAIL_ERROR());
        }
        if (password.length < 8) {
            return res.status(400).json(baseResponses.constantMessages.PASSWORD_LENGTH_ERROR());
        }

        if (!/[A-Z]/.test(password)) {
            return res.status(400).json(baseResponses.constantMessages.PASSWORD_UPPERCASE_ERROR());
        }

        if (!/[a-z]/.test(password)) {
            return res.status(400).json(baseResponses.constantMessages.PASSWORD_LOWERCASE_ERROR());
        }

        if (!/\d/.test(password)) {
            return res.status(400).json(baseResponses.constantMessages.PASSWORD_NUMBER_ERROR());
        }

        if (!/[^A-Za-z0-9]/.test(password)) {
            return res.status(400).json(baseResponses.constantMessages.PASSWORD_SYMBOL_ERROR());
        }

        if (password !== confirmPassword) {
            return res.status(400).json(baseResponses.constantMessages.PASSWORD_MISMATCH());
        }
        const existingUser = await User.findOne({
            where: Sequelize.or({ username }, { email })
        });
        if (existingUser) {
            return res.status(400).json(baseResponses.constantMessages.USER_EXISTS());
        }
        const newUser = await User.create({
            username,
            email,
            password
        });
        newUser.save();
        return res.status(200).json(baseResponses.constantMessages.USER_REGISTERED());
    } catch (error) {
        return res.status(500).json(baseResponses.error(error.message));
    }
}

const selectRole = async (req, res) => {
    try {
        const {
            username,
            roleIdOrroleName
        } = req.body;
        const user = await User.findOne({
            where: { username: username }
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
        const assignedRole = await User.update({ role_id: userrole_id }, { where: { username: username } });
        let _secret = process.env.JWT_SECRET || 'rajasekhar-secret-key';
        const token = jwt.sign({ username, user_id, userrole_id }, _secret, { expiresIn: '1h' });
        return res.status(200).json(baseResponses.constantMessages.ROLE_SELECTED({ token }));
    } catch (error) {
        return res.status(500).json(baseResponses.error(error.message));
    }
}

const signIn = async (req, res) => {
    try {
        const {
            username,
            password
        } = req.body;
        if (!username || !password) {
            return res.status(400).json(baseResponses.constantMessages.ALL_FIELDS_REQUIRED());
        }
        if (username.length < 4) {
            return res.status(400).json(baseResponses.constantMessages.USERNAME_LENGTH_ERROR());
        }
        if (password.length < 8) {
            return res.status(400).json(baseResponses.constantMessages.PASSWORD_LENGTH_ERROR());
        }

        if (!/[A-Z]/.test(password)) {
            return res.status(400).json(baseResponses.constantMessages.PASSWORD_UPPERCASE_ERROR());
        }

        if (!/[a-z]/.test(password)) {
            return res.status(400).json(baseResponses.constantMessages.PASSWORD_LOWERCASE_ERROR());
        }

        if (!/\d/.test(password)) {
            return res.status(400).json(baseResponses.constantMessages.PASSWORD_NUMBER_ERROR());
        }

        if (!/[^A-Za-z0-9]/.test(password)) {
            return res.status(400).json(baseResponses.constantMessages.PASSWORD_SYMBOL_ERROR());
        }
        const user = await User.findOne({
            where: { username },
        });
        if (!user) {
            return res.status(404).json(baseResponses.constantMessages.USER_NOT_FOUND());
        }
        if (user.role_id==null) {
            return res.status(400).json(baseResponses.constantMessages.ROLE_NOT_FOUND_ERROR());
        }
        if (password !== user.password) {
            return res.status(400).json(baseResponses.constantMessages.WRONG_PASSWORD());
        }
        let user_id=user.user_id;
        let _secret = process.env.JWT_SECRET || 'rajasekhar-secret-key';
        const token = jwt.sign({ username, user_id, role: user.role_id }, _secret, { expiresIn: '1h' });
        return res.status(200).json(baseResponses.constantMessages.LOGIN_SUCCESSFUL({ token }));

    } catch (error) {
        res.status(500).json(baseResponses.error(error.message));
    }
}

module.exports = { signUp, selectRole, signIn };
