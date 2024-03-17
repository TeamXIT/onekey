import React from "react";
import { useEffect, useState } from "react";
import { View } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../../styles/styles";
import TeamXLogoImage from "../../atoms/TeamXLogoImage";

const SplashScreen = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('userId').then((value) => {
        navigation.replace(value === null ? 'Auth' : 'Landing');
      });
    }, 3000);
  }, []);
  return (
    <View style={styles.S_background}>
      <TeamXLogoImage />
    </View>
  );
}

export default SplashScreen;
