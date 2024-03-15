
import React from 'react';
import { styles } from '../styles/styles';
import { View, TextInput, Keyboard } from 'react-native';
import PropTypes from 'prop-types';

const TeamXTextInput = ({ value, onChangeText, placeholder, keyboardType, secureTextEntry, returnKeyType, maxLength }) => {
    return (
        <View style={styles.SectionStyle}>
            <TextInput
                style={styles.inputStyle}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                placeholderTextColor={styles.appSwitchTumbFalse.color}
                keyboardType={keyboardType}
                onSubmitEditing={Keyboard.dismiss}
                secureTextEntry={secureTextEntry}
                returnKeyType={returnKeyType}
                maxLength={maxLength}
            />
        </View>
    );
};

TeamXTextInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    keyboardType: PropTypes.oneOf(['default', 'email-address', 'numeric', 'phone-pad']),
    secureTextEntry: PropTypes.bool,
    returnKeyType: PropTypes.oneOf(['done', 'go', 'next', 'search', 'send']),
    maxLength: PropTypes.number
};

TeamXTextInput.defaultProps = {
    placeholder: '',
    keyboardType: 'default',
    secureTextEntry: false,
    returnKeyType: 'next',
    MaxLength: 32
};

export default TeamXTextInput;