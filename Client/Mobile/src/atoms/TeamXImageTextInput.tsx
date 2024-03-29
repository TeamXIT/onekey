import React, { forwardRef } from 'react';
import { View, Image } from 'react-native';
import { styles } from '../styles/styles';
import PropTypes from 'prop-types';
import TeamXTextInput from '../molecules/TeamXTextInput';

const TeamXImageTextInput = forwardRef(({ value, onChangeText, placeholder, keyboardType, secureTextEntry, returnKeyType, maxLength, image, onSubmitEditing }, ref) => {
    return (
        <View style={styles.imgTextContainer}>
            {image && (
                <Image
                    source={image}
                    style={styles.textimage}
                />
            )}
            <TeamXTextInput
                ref={ref}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                returnKeyType={returnKeyType}
                maxLength={maxLength}
                onSubmitEditing={onSubmitEditing}
            />
        </View>
    );
});

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
    onSubmitEditing: PropTypes.func,
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
