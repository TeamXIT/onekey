import { Text, View } from "react-native";
import { styles } from "../../styles/styles";
import { useState } from "react";
import TeamXLogoImage from "../../atoms/TeamXLogoImage";
import TeamXButton from "../../atoms/TeamXButton";
import TeamXErrorText from "../../molecules/TeamXErrorText";
import TeamXOTPInput from "../../molecules/TeamXOTPInput";
import TeamXHeaderText from "../../atoms/TeamXHeaderText";
import { TouchableOpacity } from "react-native-gesture-handler";

const Verification = ({ route, navigation }) => {
    const otpChatLength = 4;
    const [otp, setOtp] = useState('');
    const [otpError, setOtpError] = useState('');

    const handleSubmitPress = () => {
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
            navigation.navigate('forgotPassword');
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

export default Verification;
