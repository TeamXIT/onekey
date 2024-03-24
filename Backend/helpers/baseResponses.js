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
        GET_PRODUCT_BY_ID_SUCCESSFUL: (data = null) => baseResponses.success('Product retrieved successfully', data),
        PASSWORD_LENGTH_ERROR: (data = null) => baseResponses.error('Password must contain at least 8 characters',data),
        PASSWORD_UPPERCASE_ERROR: (data = null) => baseResponses.error('Password must contain at least one upper case character',data),
        PASSWORD_LOWERCASE_ERROR: (data = null) => baseResponses.error('Password must contain at least one lower case character',data),
        PASSWORD_NUMBER_ERROR: (data = null) => baseResponses.error('Password must contain at least one number character',data),
        PASSWORD_SYMBOL_ERROR: (data = null) => baseResponses.error('Password must contain at least one special character',data),
        USERNAME_LENGTH_ERROR: (data = null) => baseResponses.error('Username must contain at least 4 characters',data),
        EMAIL_ERROR: (data = null) => baseResponses.error('Invalid email address',data),
        ROLE_NOT_FOUND_ERROR: (data = null) => baseResponses.error('Complete your registration',data),
    }
};

module.exports = {
    baseResponses
};