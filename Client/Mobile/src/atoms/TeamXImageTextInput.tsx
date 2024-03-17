import React from 'react';
import { View, TextInput, Keyboard, Image } from 'react-native';
import { styles } from '../styles/styles';
import PropTypes from 'prop-types';

const TeamXImageTextInput = ({ value, onChangeText, placeholder, keyboardType, secureTextEntry, returnKeyType, maxLength, image }) => {
    return (
        <View style={styles.imagecontainer}>
            {image && (
                <Image
                    source={image}
                    style={styles.textimage}
                />
            )}
            <TextInput
                style={styles.imageinputStyle}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                placeholderTextColor={styles.appColor.color}
                keyboardType={keyboardType}
                onSubmitEditing={Keyboard.dismiss}
                secureTextEntry={secureTextEntry}
                returnKeyType={returnKeyType}
                maxLength={maxLength}
            />
        </View>
    );
};

TeamXImageTextInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    keyboardType: PropTypes.oneOf(['default', 'email-address', 'numeric', 'phone-pad']),
    secureTextEntry: PropTypes.bool,
    returnKeyType: PropTypes.oneOf(['done', 'go', 'next', 'search', 'send']),
    maxLength: PropTypes.number,
    image: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.shape({
            uri: PropTypes.string.isRequired,
        }),
    ]),
};

TeamXImageTextInput.defaultProps = {
    placeholder: '',
    keyboardType: 'default',
    secureTextEntry: false,
    returnKeyType: 'next',
    maxLength: 32,
    image: null,
};


export default TeamXImageTextInput;
