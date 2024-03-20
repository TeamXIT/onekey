import { View } from "react-native";
import { styles } from "../../styles/styles";
import { useState } from "react";
import TeamXLogoImage from "../../atoms/TeamXLogoImage";
import TeamXButton from "../../atoms/TeamXbutton";
import TeamXErrorText from "../../molecules/TeamXErrorText";
import TeamXOTPInput from "../../molecules/TeamXOTPInput";
import TeamXHeaderText from "../../atoms/TeamXHeaderText";

const Verification = ({ navigation }) => {
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
            navigation.navigate('typeselection');
        }
    }

    return (
        <View style={styles.containerStyle}>
            <TeamXLogoImage />
            <TeamXHeaderText value={"VERIFY OTP"} />
            <TeamXOTPInput numberOfDigits={otpChatLength} onOTPChange={setOtp} />
            <TeamXErrorText errorText={otpError} />
            <TeamXButton onPress={handleSubmitPress} text="VERIFY" />
        </View>
    )
};

export default Verification;