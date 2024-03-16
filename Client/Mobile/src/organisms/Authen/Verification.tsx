import { View, Text, Image, Alert } from "react-native";
import {styles} from "../../styles/styles";
import { useState } from "react";
import TeamXTextInput from "../../molecules/TeamXTextInput";
import ButtonComponent from "../../atoms/TeamXbutton";
import LogoImage from "../../atoms/logo";
import OTPInput from "../../molecules/otpComponent";

const Verification = ({ navigation }) => {
    const[otp,setOtp]=useState('');
    const verify=()=>{
        if(otp==''){
            return Alert.alert('Invalid','Enter valid OTP')
        }
        navigation.navigate('typeselection')
    }

    return (
        <View style={styles.BgContainer}>
             <LogoImage />
            <Text style={styles.header}>Verify OTP</Text>
            <View style={[styles.SectionStyle,[]]}>
            <OTPInput  onOTPChange={setOtp} />
            </View>
            <ButtonComponent onPress={verify} text="VERIFY" />
        </View>
    )
};

export default Verification;
