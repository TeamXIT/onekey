
import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import { styles } from "../../styles/styles";
import { useState } from "react";
import ErrorText from "../../molecules/ErrorText";

import TeamXTextInput from "../../molecules/TeamXTextInput";

const Verification = ({ navigation }) => {
    const [otp, setOtp] = useState('');
    const [otpError, setOtpError] = useState('');

    const handleSubmitPress = () => {
        let hasError = false;

        if (!otp.trim()) {
            setOtpError('Please provide OTP.');
            hasError = true;
        } else if (otp.trim().length < 6) {
            setOtpError('OTP must be  6 characters');
            hasError = true;
        } else {
            setOtpError('');
        }

        if (!hasError) {
            navigation.navigate('typeselection');
        }
    }
    return (
        <View style={styles.BgContainer}>
            <LogoImage />
            <Text style={styles.V_verifyTest}>Verify OTP</Text>
            <View style={[styles.SectionStyle,[]]}>
             <OTPInput  onOTPChange={setOtp} />
            </View>
            <ErrorText errorText={otpError} />

            <ButtonComponent onPress={verify} text="VERIFY" />
    )
};

export default Verification;
