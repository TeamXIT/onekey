
import { View } from "react-native";
import { styles } from "../../styles/styles";
import { useState } from "react";
import TeamXLogoImage from "../../atoms/TeamXLogoImage";
import ButtonComponent from "../../atoms/TeamXbutton";
import TeamXErrorText from "../../molecules/TeamXErrorText";
import TeamXOTPInput from "../../molecules/TeamXOTPInput";
import TeamXHeaderText from "../../atoms/TeamXHeaderText";


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
        <View style={styles.mainContainer}>
            <TeamXLogoImage />
            <TeamXHeaderText value={"VERIFY OTP"} />
            <View style={[styles.SectionStyle, []]}>
                <TeamXOTPInput onOTPChange={setOtp} />
            </View>
            <TeamXErrorText errorText={otpError} />
            <ButtonComponent onPress={handleSubmitPress} text="VERIFY" />
        </View>
    )
};

export default Verification;