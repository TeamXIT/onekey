import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { verifyOtp, sendOtp, setError } from "../../reducers/auth/authSlice";
import TeamXLogoImage from "../../atoms/TeamXLogoImage";
import TeamXButton from "../../atoms/TeamXButton";
import TeamXErrorText from "../../molecules/TeamXErrorText";
import TeamXOTPInput from "../../molecules/TeamXOTPInput";
import TeamXLoader from "../../molecules/TeamXLoader";
import { styles } from "../../styles/styles";

const Verification = ({ route, navigation }) => {
    const otpChatLength = 6;
    const dispatch = useAppDispatch();
    const { isBusy, error } = useAppSelector(state => state.auth.screen);
    const phoneNumberObject = useAppSelector(state => state.auth.data.responsePhoneNumber);
    const phoneNumber = phoneNumberObject?.number || '';

    const [otp, setOtp] = useState('');
    const [otpError, setOtpError] = useState('');

    const handleSubmitPress = async () => {
        let hasError = false;
    
        if (!otp.trim()) {
            setOtpError('Please provide OTP.');
            hasError = true;
        } else if (otp.trim().length !== otpChatLength) {
            setOtpError('Invalid OTP');
            hasError = true;
        } else {
            setOtpError('');
        }
    
        if (!hasError) {
            dispatch(setError('')); // Clear previous errors
            try {
                await dispatch(verifyOtp(otp)); // Assuming verifyOtp is correctly implemented
                navigation.navigate('setPassword'); // Navigate on successful verification
            } catch (err) {
                setOtpError('Verification failed. Please try again.');
            }
        }
    };
    
    const handleResendOtp = async () => {
        try {
            await dispatch(sendOtp(phoneNumber)); // Dispatch action to resend OTP
            setOtpError(''); // Clear previous error messages
        } catch (err) {
            setOtpError('Failed to resend OTP. Please try again.');
        }
    };
    

    useEffect(() => {
        if (error) {
            setOtpError(error); // Set error message from Redux state
        }
    }, [error]);
    

    return (
        <View style={styles.containerStyle}>
            <TeamXLoader loading={isBusy} />
            <TeamXLogoImage />
            <Text style={styles.headerText}>OTP Verification</Text>
            <Text style={styles.subText}>Enter the OTP sent to {phoneNumber}</Text>
            <TeamXOTPInput numberOfDigits={otpChatLength} onOTPChange={setOtp} />
            <TeamXErrorText errorText={otpError} />
            <TeamXButton onPress={handleSubmitPress} text="VERIFY" />
            <View style={styles.resendContainer}>
                <Text style={styles.resendText}>Didn't receive OTP?</Text>
                <TouchableOpacity onPress={handleResendOtp}>
                    <Text style={styles.resendButtonText}>RESEND</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Verification;
