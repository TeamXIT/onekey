const BASE_RESPONSE_MESSAGES = {
    SUCCESS: {
        USER_REGISTERED: 'User registered successfully',
        ROLE_SELECTED: 'User role selected successfully',
        LOGIN_SUCCESSFUL: 'Login successful',
        PRODUCT_CREATE_SUCCESSFUL: 'Product created successfully',
        PRODUCT_DELETE_SUCCESSFUL:'Product deleted successfully',
        GET_ALL_PRODUCT_SUCCESSFUL: 'Product retrieved successfully',
        PRODUCT_UPDATE_SUCCESSFUL:'Product updated successfully',
        GET_PRODUCT_BY_ID_SUCCESSFUL: 'Product retrieved successfully',
    },
    ERROR: {
        ALL_FIELDS_REQUIRED: 'All fields are required',
        PASSWORD_MISMATCH: 'Password do not match',
        USER_EXISTS: 'Username or email already exists',
        USER_NOT_FOUND: 'User not found',
        INVALID_ROLE: 'Invalid role',
        WRONG_PASSWORD: 'Wrong password',
        PRODUCT_NOT_FOUND:'Product not found'
    }
};

module.exports = {
    BASE_RESPONSE_MESSAGES
};