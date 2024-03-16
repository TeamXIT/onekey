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
        <View style={styles.mainContainerView}>
            <Image source={require('../../../assets/images/person.png')} style={styles.V_image} />
            <Text style={styles.V_verifyTest}>Verify OTP</Text>
            <TeamXTextInput
                value={otp}
                onChangeText={setOtp}
                placeholder="Enter OTP"
                keyboardType="email-address"
                secureTextEntry={true}
                maxLength={6}

            />
            <ErrorText errorText={otpError} />

            <TouchableOpacity style={styles.V_button} onPress={handleSubmitPress}>
                <Text style={styles.V_buttonText}>Verify</Text>
            </TouchableOpacity>
        </View>
    )
};

export default Verification;
