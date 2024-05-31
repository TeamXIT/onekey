import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from '../styles/styles';
import LinearGradient from 'react-native-linear-gradient';


const TeamXButton = ({ onPress, text }) => {
    return (
        <TouchableOpacity
             
            activeOpacity={0.7}
            onPress={onPress}>
           <LinearGradient
                colors={['#888693', '#35314A']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1}}
                style={styles.buttonStyle}
            >
              <Text style={styles.buttonTextStyle}>{text}</Text>

            </LinearGradient>
        </TouchableOpacity>
        

    );
};

TeamXButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

export default TeamXButton;
