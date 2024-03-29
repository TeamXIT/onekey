import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from '../styles/styles';

const TeamXButton = ({ onPress, text }) => {
    return (
        <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.7}
            onPress={onPress}>
            <Text style={styles.buttonTextStyle}>{text}</Text>
        </TouchableOpacity>
    );
};

TeamXButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

export default TeamXButton;
