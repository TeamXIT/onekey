import { Text, View } from "react-native"
import { styles } from "../../styles/styles";
import { useEffect, useRef, useState, } from "react";
import TeamXButton from "../../atoms/TeamXButton";
import TeamXImageTextInput from "../../atoms/TeamXImageTextInput";
import TeamXLogoImage from "../../atoms/TeamXLogoImage";
import TeamXHeaderText from "../../atoms/TeamXHeaderText";
import TeamXTextedLink from "../../molecules/TeamXTextedLink";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import TeamXErrorText from "../../molecules/TeamXErrorText";
import { signInWithPassword } from "../../reducers/auth/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";
import TeamXLoader from "../../molecules/TeamXLoader";
import PhoneInput from "react-native-phone-number-input";


const Signin = ({ navigation }) => {
    const dispatch = useAppDispatch()
    const authen = useAppSelector(state => state.auth);

    const [phoneNumber, setPhoneNumber] = useState('9876543210');
    const [password, setPassword] = useState('Teamx@123');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [signinError, setSigninError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const passwordRef = useRef(null);
    const phoneInput = useRef(null);


    useEffect(() => {
        if (authen.screen.error !== '') {
            if (authen.screen.error == "Complete your registration") {
                navigation.navigate('typeselection');
            }
            else {
                setSigninError(authen.screen.error);
            }
        } else if (authen.data.AuthToken) {
            //console.log("AuthToken: ", authen.data.AuthToken);
            AsyncStorage.setItem('mobileNumber', authen.data.MobileNumber).then(() => {
                AsyncStorage.setItem('password', password).then(() => {
                    AsyncStorage.setItem('userId', authen.data.UserId).then(() => {
                        AsyncStorage.setItem('AuthToken', authen.data.AuthToken).then(() => {
                            navigation.replace('Landing');
                        });
                    });
                });
            });
        }
        setIsLoading(false);
    }, [authen.screen.error, authen.data.AuthToken]);

    const handleSubmitPress = async () => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        let hasError = false;
        if (!phoneNumber.trim()) {
            setPhoneNumberError('Please provide phone number.');
            hasError = true;
        } else if (phoneNumber.trim().length < 10) {
            setPhoneNumberError('phone number must be  10 characters.');
            hasError = true;
        } else {
            setPhoneNumberError('');
        }
        if (!password.trim()) {
            setPasswordError('Please provide password.');
            hasError = true;
        } else if (!passwordRegex.test(password.trim())) {
            setPasswordError('Password must have minimum 8 characters, at least one lowercase letter, one uppercase letter, and one numeric character.');
            hasError = true;
        }
        if (!hasError) {
            setIsLoading(true);
            setSigninError('');
            const fullPhoneNumber = `+91${phoneNumber}`;
           await  dispatch(signInWithPassword(fullPhoneNumber, password));
            navigation.navigate('Landing')
            setPasswordError('');
        }
    }

    const handlePhoneNumberChange = (value) => {
        // Remove non-numeric characters from the input value
        const numericValue = value.replace(/[^0-9]/g, '');
        setPhoneNumber(numericValue);
    };


    return (
        <View style={[styles.containerStyle, { padding: 0, gap: 0 }]}>
            <TeamXLoader loading={isLoading} />
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} >
                <View style={styles.containerStyle}>
                    <TeamXLogoImage />
                    <TeamXHeaderText value="SIGNIN" />
                    <View>

                        <PhoneInput
                            ref={phoneInput}
                            defaultValue={phoneNumber}
                            defaultCode="IN"
                            layout="first"
                            onChangeText={handlePhoneNumberChange} // Use the custom change handler
                            containerStyle={styles.countryCodeContainer}
                            textContainerStyle={styles.signuptextContainer}
                            textInputStyle={styles.signuptextInput}
                            countryPickerButtonStyle={{ paddingVertical: 0 }}
                            renderDropdownImage={<Text style={styles.countryPickerArrow}>▼</Text>}

                            placeholder="Phone Number"
                            keyboardType="number-pad"
                        />
                        <TeamXErrorText errorText={phoneNumberError} />
                    </View>
                    <View>
                        <TeamXImageTextInput
                            ref={passwordRef}
                            value={password}
                            onChangeText={setPassword}
                            image={require('../../images/ic_eye.png')}
                            placeholder="Enter Password"
                            secureTextEntry={true}
                            returnKeyType="done"
                        />
                        <TeamXErrorText errorText={passwordError} />
                    </View>

                    <TeamXErrorText errorText={signinError} />

                    <TeamXButton onPress={handleSubmitPress} text="SIGNIN" />
                    <Text style={styles.switchTextStyle}>OR</Text>
                    <Text
                        style={styles.switchTextStyle}
                        onPress={() => navigation.replace('signupWithOTP')}>
                        Sign in with OTP
                    </Text>

                    <TeamXTextedLink
                        value={"Don't have an account?  "}
                        linkValue={"SIGNUP"}
                        handleOnPress={() => navigation.navigate('signup')} />
                </View>
            </ScrollView>
        </View>
    );
}

export default Signin;
