import React from "react";
import { useEffect, useState } from "react";
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'

import { Text, View } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../../styles/styles";
import TeamXLogoImage from "../../atoms/TeamXLogoImage";

const SplashScreen = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      //AsyncStorage.removeItem('username');
      AsyncStorage.getItem('username').then((uName) => {
        AsyncStorage.getItem('password').then((uPwd) => {
          if ((uName === null || uPwd === null)) {
            navigation.replace('Auth');
          } else {
            //TODO: Call boimetrics
            
            const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true })
            rnBiometrics.simplePrompt({ promptMessage: 'Confirm password or fingerprint' })
              .then((resultObject) => {
                const { success } = resultObject

                if (success) {
                  console.log('successful biometrics provided')
                } else {
                  console.log('user cancelled biometric prompt')
                }
              })
              .catch(() => {
                console.log('biometrics failed')
              })

            navigation.replace('Landing');
          }
        });
      });
    }, 3000);
  }, []);
  return (
    <View style={styles.containerStyle}>
      <TeamXLogoImage />
      <Text style={[styles.textStyle, { top: 280, alignItems: "center" }]}>Powered by {'\n'} TeamX</Text>
    </View>
  );
}

export default SplashScreen;
