
import React from 'react';
import { styles } from '../styles/styles';
import { View, TextInput, Keyboard } from 'react-native';
import PropTypes from 'prop-types';

const TextField = ({ value, onChangeText, placeholder, keyboardType, secureTextEntry, returnKeyType }) => {
    return (
        <View style={styles.SectionStyle}>
            <TextInput
                style={styles.inputStyle}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                placeholderTextColor="#8b9cb5"
                keyboardType={keyboardType}
                onSubmitEditing={Keyboard.dismiss}
                secureTextEntry={secureTextEntry}
                returnKeyType={returnKeyType}
            />
        </View>
    );
};
TextField.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    keyboardType: PropTypes.oneOf(['default', 'email-address', 'numeric', 'phone-pad']),
    secureTextEntry: PropTypes.bool,
    returnKeyType: PropTypes.oneOf(['done', 'go', 'next', 'search', 'send']),
};

TextField.defaultProps = {
    placeholder: '',
    keyboardType: 'default',
    secureTextEntry: false,
    returnKeyType: 'done',
};
export default TextField;