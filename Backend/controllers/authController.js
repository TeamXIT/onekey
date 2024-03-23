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
        console.log(req.body);
        const user = await User.findOne({
            where: { username: username }
        });
        console.log(user);
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
        console.log(existingRole);
        //if user entered role is not a valid role
        if (!existingRole) {
            return res.status(404).json(baseResponses.constantMessages.INVALID_ROLE());
        }
        let userrole_id = existingRole.role_id
        //updating the role_id of user 
        const assignedRole = await User.update({ role_id: userrole_id }, { where: { username: username } });
        let _secret = process.env.JWT_SECRET || 'rajasekhar-secret-key';
        const token = jwt.sign({ username, userrole_id }, _secret, { expiresIn: '1h' });
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
        const user = await User.findOne({
            where: { username },
        });
        if (!user) {
            return res.status(404).json(baseResponses.constantMessages.USER_NOT_FOUND());
        }
        if (password !== user.password) {
            return res.status(400).json(baseResponses.constantMessages.WRONG_PASSWORD());
        }
        let _secret = process.env.JWT_SECRET || 'rajasekhar-secret-key';
        const token = jwt.sign({ username, role: user.role }, _secret, { expiresIn: '1h' });
        return res.status(200).json(baseResponses.constantMessages.LOGIN_SUCCESSFUL({ token }));

    } catch (error) {
        res.status(500).json(baseResponses.error(error.message));
    }
}

module.exports = { signUp, selectRole, signIn };
