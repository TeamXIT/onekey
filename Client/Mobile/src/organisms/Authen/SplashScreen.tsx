import React from "react";
import { useEffect, useState } from "react";
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'
import { Text, View } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../../styles/styles";
import TeamXLogoImage from "../../atoms/TeamXLogoImage";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import TeamXLoader from "../../molecules/TeamXLoader";
import { UserSignin } from "../../reducers/auth/authSlice";

const SplashScreen = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const authen = useAppSelector(state => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const rnBiometrics = new ReactNativeBiometrics();

  useEffect(() => {
    setTimeout(() => {
      console.log("Isvalidating");
      //AsyncStorage.removeItem('username');
      try {
        AsyncStorage.getItem('username').then((uName) => {
          AsyncStorage.getItem('password').then(async (uPwd) => {
            if (uName && uPwd) {
              rnBiometrics.isSensorAvailable()
                .then((resultObject) => {
                  const { available, biometryType } = resultObject
                  if (available
                    && (biometryType === BiometryTypes.TouchID
                      || biometryType === BiometryTypes.FaceID
                      || biometryType === BiometryTypes.Biometrics)) {
                    const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true })
                    rnBiometrics.simplePrompt({ promptMessage: 'Confirm password or fingerprint' })
                      .then((resultObject) => {
                        const { success } = resultObject
                        if (success) {
                          setIsLoading(true);
                          dispatch(UserSignin(uName, uPwd));
                        } else {
                          console.log('Invalig authentication.')
                        }
                      })
                      .catch((ex) => {
                        console.log('biometrics failed', ex)
                      });
                  } else {
                    setIsLoading(true);
                    dispatch(UserSignin(uName, uPwd));
                  }
                })
            } else {
              navigation.replace('Auth');
            }
          });
        });
      } catch (error) {
      }
    }, 3000);
  }, []);

  useEffect(() => {
    if (authen?.data?.AuthToken) {
      AsyncStorage.setItem('AuthToken', authen.data.AuthToken).then(() => {
        navigation.replace('Landing');
      });
    }
    setIsLoading(false);
  }, [authen?.data?.AuthToken]);

  return (
    <View style={styles.containerStyle}>
      <TeamXLoader loading={isLoading} />
      <TeamXLogoImage />
      <Text style={[styles.textStyle, { top: 280, alignItems: "center" }]}>Powered by {'\n'} TeamX</Text>
    </View>
  );
}

export default SplashScreen;
