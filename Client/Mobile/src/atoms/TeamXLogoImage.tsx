import React from 'react';
import { Image } from 'react-native';
import { styles } from '../styles/styles';

const TeamXLogoImage = () => {
    return (
        <Image
            source={require('../images/ic_logo.png')}
            style={styles.logoimg}
        />
    );
};

export default TeamXLogoImage;
