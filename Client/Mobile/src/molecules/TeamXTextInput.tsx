import React, { forwardRef } from 'react';
import { styles } from '../styles/styles';
import { View, TextInput, Keyboard } from 'react-native';
import PropTypes from 'prop-types';

const TeamXTextInput = forwardRef(({ value, onChangeText, placeholder, keyboardType, secureTextEntry, returnKeyType, maxLength, onSubmitEditing }, ref) => {
    return (
            <TextInput
                style={styles.imageInputStyle}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                placeholderTextColor={styles.appTertiary.color}
                keyboardType={keyboardType}
                onSubmitEditing={onSubmitEditing || Keyboard.dismiss}
                secureTextEntry={secureTextEntry}
                returnKeyType={returnKeyType}
                maxLength={maxLength}
                ref={ref}
            />
    );
});

TeamXTextInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    keyboardType: PropTypes.oneOf(['default', 'email-address', 'numeric', 'phone-pad']),
    secureTextEntry: PropTypes.bool,
    returnKeyType: PropTypes.oneOf(['done', 'go', 'next', 'search', 'send']),
    maxLength: PropTypes.number,
    onSubmitEditing: PropTypes.func,
};

TeamXTextInput.defaultProps = {
    placeholder: '',
    keyboardType: 'default',
    secureTextEntry: false,
    returnKeyType: 'next',
    maxLength: 32,
};

export default TeamXTextInput;
