const baseResponses = {
    success: (message, data = null) => ({ success: true, message, data }),
    error: (message, data = null) => ({ success: false, error: message, data }),
    constantMessages: {
        ALL_FIELDS_REQUIRED: (data = null) => baseResponses.error('All fields are required', data),
        PASSWORD_MISMATCH: (data = null) => baseResponses.error('Password do not match', data),
        USER_EXISTS: (data = null) => baseResponses.error('Username or email already exists', data),
        USER_NOT_FOUND: (data = null) => baseResponses.error('User not found', data),
        INVALID_ROLE: (data = null) => baseResponses.error('Invalid role', data),
        WRONG_PASSWORD: (data = null) => baseResponses.error('Wrong password', data),
        USER_REGISTERED: (data = null) => baseResponses.success('User registered successfully', data),
        ROLE_SELECTED: (data = null) => baseResponses.success('User role selected successfully', data),
        LOGIN_SUCCESSFUL: (data = null) => baseResponses.success('Login successful', data),
        PRODUCT_DELETE_SUCCESSFUL: (data = null) => baseResponses.success('Product deleted successfully', data),
        PRODUCT_CREATE_SUCCESSFUL: (data = null) => baseResponses.success('Product created successfully', data),
        PRODUCT_NOT_FOUND: (data = null) => baseResponses.error('Product not found', data),
        GET_ALL_PRODUCT_SUCCESSFUL: (data = null) => baseResponses.success('Product retrieved successfully', data),
        PRODUCT_UPDATE_SUCCESSFUL: (data = null) => baseResponses.success('Product updated successfully', data),
        GET_PRODUCT_BY_ID_SUCCESSFUL: (data = null) => baseResponses.success('Product retrieved successfully', data)

    }
};

module.exports = {
    baseResponses
};