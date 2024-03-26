import React from "react";
import { useEffect, useState } from "react";
import { Text, View } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../../styles/styles";
import TeamXLogoImage from "../../atoms/TeamXLogoImage";

const SplashScreen = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      //AsyncStorage.removeItem('username');
      AsyncStorage.getItem('username').then((value) => {
        navigation.replace(value === null ? 'Auth' : 'Landing');
      });
    }, 3000);
  }, []);
  return (
    // <View style={styles.containerStyle}>
    //   <TeamXLogoImage />
    // </View>
    <View style={styles.containerStyle}>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <TeamXLogoImage />
      </View>
      <Text style={styles.textStyle}>Powered by {'\n'}   TeamX</Text>
    </View>
  );
}

export default SplashScreen;
