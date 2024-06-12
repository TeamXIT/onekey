import { View, ScrollView, StyleSheet, Text } from "react-native";
import React, { useState, useRef } from "react";
import { styles } from '../../styles/styles';
import TeamXLogoImage from "../../atoms/TeamXLogoImage";
import TeamXButton from "../../atoms/TeamXButton";
import TeamXTextedLink from "../../molecules/TeamXTextedLink";
import TeamXErrorText from "../../molecules/TeamXErrorText"; 
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { UserSignup } from "../../reducers/auth/authSlice";
import TeamXLoader from "../../molecules/TeamXLoader";
import PhoneInput from "react-native-phone-number-input";

const Signup = ({ navigation }) => {
    const dispatch = useAppDispatch();
    const authen = useAppSelector(state => state.auth);

    const [phoneNumber, setPhoneNumber] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [phoneNumberError, setPhoneNumberError] = useState(''); // State for phone number error
    const phoneInput = useRef(null);

    const handleSubmitPress = () => {
        const phoneNumberValue = phoneNumber.trim();

        // Check if phone number is empty
        if (!phoneNumberValue) {
            setPhoneNumberError('Please provide a phone number.');
            return;
        }

        // Validate phone number length
        if (phoneNumberValue.length !== 10) {
            setPhoneNumberError('Phone number must be 10 digits.');
            return;
        }

        setIsLoading(true);
        dispatch(UserSignup(phoneNumberValue));
        navigation.navigate('verification', { phoneNumber: phoneNumberValue });
    };

    const handlePhoneNumberChange = (value) => {
        // Remove non-numeric characters from the input value
        const numericValue = value.replace(/[^0-9]/g, '');
        setPhoneNumber(numericValue);
    };

    return (
        <View style={[styles.containerStyle, { padding: 0, gap: 0 }]}>
            <TeamXLoader loading={isLoading} />
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <View style={[styles.containerStyle]}>
                    <TeamXLogoImage />
                    <Text style={styles.signuptitle}>Enter your Phone Number</Text>
                    <Text style={styles.signupsubtitle}>We will send you the 4 digit verification code</Text>

                    <View style={styles.signupinputContainer}>
                        <PhoneInput
                            ref={phoneInput}
                            defaultValue={phoneNumber}
                            defaultCode="IN"
                            layout="first"
                            onChangeText={handlePhoneNumberChange}
                            containerStyle={styles.signupphoneContainer}
                            textContainerStyle={styles.signuptextContainer}
                            textInputStyle={styles.signuptextInput}
                            countryPickerButtonStyle={styles.countryPickerButton}
                            renderDropdownImage={<Text style={styles.countryPickerArrow}>▼</Text>}
                            placeholder="Phone Number" 
                            keyboardType="number-pad"
                        />
                        
                        <TeamXErrorText errorText={phoneNumberError} /> 
                    </View>

                    <TeamXButton onPress={handleSubmitPress} text="GENERATE OTP" />

                    <TeamXTextedLink
                        value={"Already have an account? "}
                        linkValue={"SIGNIN"}
                        handleOnPress={() => navigation.navigate('signin')}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default Signup;
