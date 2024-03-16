import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from '../styles/styles'; 

const ButtonComponent = ({ onPress, text }) => {
    return (
        <View style={{ alignItems: "center" }}>
            <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.7} 
                onPress={onPress}
                >
                <Text style={styles.buttonTextStyle}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

ButtonComponent.propTypes = {
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

export default ButtonComponent;
