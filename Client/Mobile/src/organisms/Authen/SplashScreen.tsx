import React from "react";
import { useEffect, useState } from "react";
import { Text,View } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../../styles/styles";

const SplashScreen = ({navigation}) => {
    const [animating, setAnimating] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          AsyncStorage.getItem('userId').then((value) => {
            navigation.replace(value === null ? 'Auth' : 'Landing');
          });
        }, 3000);
      }, []);
    return(
    <View style={styles.S_background}>

    </View>
    );
}


export default SplashScreen;