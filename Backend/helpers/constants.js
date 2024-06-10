const BASE_RESPONSE_MESSAGES = {
    SUCCESS: {
        USER_REGISTERED: 'User registered successfully',
        OTP_VERIFIED: 'otp verified successfully',
        ROLE_SELECTED: 'User role selected successfully',
        LOGIN_SUCCESSFUL: 'Login successful',
        PRODUCT_CREATE_SUCCESSFUL: 'Product created successfully',
        PRODUCT_DELETE_SUCCESSFUL:'Product deleted successfully',
        GET_ALL_PRODUCT_SUCCESSFUL: 'Product retrieved successfully',
        PRODUCT_UPDATE_SUCCESSFUL:'Product updated successfully',
        GET_PRODUCT_BY_ID_SUCCESSFUL: 'Product retrieved successfully',
        PRODUCT_ACCEPTED_SUCCESSFUL: 'Product accepted successfully'
    },
    ERROR: {
        ALL_FIELDS_REQUIRED: 'All fields are required',
        PASSWORD_MISMATCH: 'Password do not match',
        INVALID_MOBILE_NUMBER: 'Invalid mobile number',
        INVALID_OTP: 'Invalid otp',
        USER_EXISTS: 'Mobile-number already exists',
        USER_NOT_FOUND: 'User not found',
        INVALID_ROLE: 'Invalid role',
        WRONG_PASSWORD: 'Wrong password',
        PRODUCT_NOT_FOUND:'Product not found',
        PASSWORD_LENGTH_ERROR:'Password must contain at least 8 characters',
        PASSWORD_UPPERCASE_ERROR:'Password must contain at least one upper case character',
        PASSWORD_LOWERCASE_ERROR:'Password must contain at least one lower case character',
        PASSWORD_NUMBER_ERROR:'Password must contain at least one number character',
        PASSWORD_SYMBOL_ERROR:'Password must contain at least one special character',
        USERNAME_LENGTH_ERROR:'Username must contain at least 4 characters',
        EMAIL_ERROR:'Invalid email address',
        ROLE_NOT_FOUND_ERROR:'Complete your registration'
    }
};

module.exports = {
    BASE_RESPONSE_MESSAGES
};