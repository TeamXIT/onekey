const BASE_RESPONSE_MESSAGES = {
    SUCCESS: {
        USER_REGISTERED: 'User registered successfully',
        ROLE_SELECTED: 'User role selected successfully',
        LOGIN_SUCCESSFUL: 'Login successful'
    },
    ERROR: {
        ALL_FIELDS_REQUIRED: 'All fields are required',
        PASSWORD_MISMATCH: 'Password do not match',
        USER_EXISTS: 'Username or email already exists',
        USER_NOT_FOUND: 'User not found',
        INVALID_ROLE: 'Invalid role',
        WRONG_PASSWORD: 'Wrong password'
    }
};

module.exports = {
    BASE_RESPONSE_MESSAGES
};