import React from 'react';
import { Image } from 'react-native';
import { styles } from '../styles/styles';

const LogoImage = () => {
    return (
        <Image
            source={require('../../assets/images/ic_logo.png')}
            style={styles.logoimg}
        />
    );
};

export default LogoImage;
