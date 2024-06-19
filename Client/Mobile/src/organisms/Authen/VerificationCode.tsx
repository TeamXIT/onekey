import { Text, View } from "react-native";
import { styles } from "../../styles/styles";
import { useState } from "react";
import TeamXLogoImage from "../../atoms/TeamXLogoImage";
import TeamXButton from "../../atoms/TeamXButton";
import TeamXErrorText from "../../molecules/TeamXErrorText";
import TeamXOTPInput from "../../molecules/TeamXOTPInput";
import TeamXHeaderText from "../../atoms/TeamXHeaderText";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import {  setError, signInWithOtp, verifyOtp } from "../../reducers/auth/authSlice";

const VerificationCode = ({ route, navigation }) => {
    const otpChatLength = 6;
    const dispatch = useAppDispatch();
    const { isBusy, error } = useAppSelector(state => state.auth.screen);
    const phoneNumberObject = useAppSelector(state => state.auth.data.responsePhoneNumber);
    const [otp, setOtp] = useState('');
    const [otpError, setOtpError] = useState('');

    const handleSubmitPress = async () => {
        let hasError = false;

        if (!otp.trim()) {
            setOtpError('Please provide OTP.');
            hasError = true;
        } else if (otp.trim().length < otpChatLength) {
            setOtpError('Invalid OTP');
            hasError = true;
        } else {
            setOtpError('');
        }

        if (!hasError) {
            dispatch(setError('')); // Clear previous errors
            try {
                await dispatch(signInWithOtp(otp)); // Assuming verifyOtp is correctly implemented
                navigation.navigate('Landing'); // Navigate on successful verification
            } catch (err) {
                setOtpError('Verification failed. Please try again.');
            }
        }
    }

    // Access phone number from route parameters
    const { phoneNumber } = route.params;

    return (
        <View style={styles.containerStyle}>
            <TeamXLogoImage />
            <Text style={styles.headerText}>OTP Verification</Text>
            <Text style={styles.subText}>Enter the OTP sent to {phoneNumber}</Text>
            <TeamXOTPInput numberOfDigits={otpChatLength} onOTPChange={setOtp} />
            <TeamXErrorText errorText={otpError} />
            <TeamXButton onPress={handleSubmitPress} text="VERIFY" />
            <View style={styles.resendContainer}>
                <Text style={styles.resendText}>Didn't receive OTP?</Text>
                <TouchableOpacity>
                    <Text style={styles.resendButtonText}>RESEND</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default VerificationCode;
