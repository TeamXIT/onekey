import { View, ScrollView } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { styles } from '../../styles/styles'
import TeamXLogoImage from "../../atoms/TeamXLogoImage";
import TeamXImageTextInput from "../../atoms/TeamXImageTextInput";
import TeamXErrorText from "../../molecules/TeamXErrorText";
import TeamXHeaderText from "../../atoms/TeamXHeaderText";
import TeamXButton from "../../atoms/TeamXButton";
import TeamXTextedLink from "../../molecules/TeamXTextedLink";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { UserSignup } from "../../reducers/auth/authSlice";
import TeamXLoader from "../../molecules/TeamXLoader";

const Signup = ({ navigation }) => {
    const dispatch = useAppDispatch();
    const authen = useAppSelector(state => state.auth);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');

    
    const [signupError, setSignupError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (authen.screen.error !== '') {
            setSignupError(authen.screen.error);
        } else if (authen.data.Username) {
            navigation.navigate('typeselection');
        }
        setIsLoading(false);
    }, [authen.screen.error, authen.data.Username]);

    const handleSubmitPress = () => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        let hasError = false;

        // Check username
        if (!username.trim()) {
            setUsernameError('Please provide username.');
            hasError = true;
        } else if (username.trim().length < 4) {
            setUsernameError('Username must be at least 4 characters.');
            hasError = true;
        } else {
            setUsernameError('');
        }

        // Check email
        if (!email.trim()) {
            setEmailError('Please provide email.');
            hasError = true;
        } else if (!emailRegex.test(email.trim())) {
            setEmailError('Please enter a valid email address.');
            hasError = true;
        } else if (email.trim().length < 8) {
            setEmailError('Email must be at least 8 characters.');
            hasError = true;
        } else {
            setEmailError('');
        }

        // Check password
        if (!password.trim()) {
            setPasswordError('Please provide password.');
            hasError = true;
        } else if (!passwordRegex.test(password.trim())) {
            setPasswordError('Password must have minimum 8 characters, at least one lowercase letter, one uppercase letter, and one numeric character.');
            hasError = true;
        } else {
            setPasswordError('');
        }

        // Check confirm password
        if (!confirmPassword.trim()) {
            setConfirmPasswordError('Please provide confirm password.');
            hasError = true;
        } else if (confirmPassword.trim().length < 8) {
            setConfirmPasswordError('Confirm password must be at least 8 characters.');
            hasError = true;
        } else if (confirmPassword.trim() !== password.trim()) {
            setConfirmPasswordError('Passwords do not match.');
            hasError = true;
        } else {
            setConfirmPasswordError('');
        }

        //Check phone number
        if (!phoneNumber.trim()) {
            setPhoneNumberError('Please provide phone number.');
            hasError = true;
        } else if (phoneNumber.trim().length < 11) {
            setPhoneNumberError('Phone number must be 10 numbers.');
            hasError = true;
        } else {
            setPhoneNumberError('');
        }

        if (!hasError) {
            setIsLoading(true);
            setSignupError('');
            dispatch(UserSignup(username, email, password, confirmPassword));
        }
    }

    const emailRef = useRef(null)
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null)
    const phoneNumberRef = useRef(null)


    return (
        <View style={[styles.containerStyle, { padding: 0, gap: 0 }]}>
            <TeamXLoader loading={isLoading} />
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} >
                <View style={[styles.containerStyle,]}>
                    <TeamXLogoImage />
                    <TeamXHeaderText value="SIGNUP" />
                    <View>
                        <TeamXImageTextInput
                            value={username}
                            onChangeText={setUsername}
                            image={require('../../images/ic_user.png')}
                            placeholder="Enter Username"
                            keyboardType="email-address"
                            returnKeyType="next"
                            onSubmitEditing={() => { emailRef.current?.focus() }}
                        />
                        <TeamXErrorText errorText={usernameError} />
                    </View>

                    <View>
                        <TeamXImageTextInput
                            ref={emailRef}
                            value={email}
                            onChangeText={setEmail}
                            image={require('../../images/ic_email.png')}
                            placeholder="Enter Email"
                            keyboardType="email-address"
                            onSubmitEditing={() => { passwordRef.current?.focus() }}
                        />
                        <TeamXErrorText errorText={emailError} />
                    </View>

                    <View>
                        <TeamXImageTextInput
                            ref={passwordRef}
                            value={password}
                            onChangeText={setPassword}
                            image={require('../../images/ic_eye.png')}
                            placeholder="New Password"
                            secureTextEntry={true}
                            returnKeyType="done"
                            onSubmitEditing={() => { confirmPasswordRef.current?.focus() }}
                        />
                        <TeamXErrorText errorText={passwordError} />
                    </View>

                    <View>
                        <TeamXImageTextInput
                            ref={confirmPasswordRef}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            image={require('../../images/ic_eye.png')}
                            placeholder="Confirm Password"
                            secureTextEntry={true}
                            returnKeyType="done"
                        />
                        <TeamXErrorText errorText={confirmPasswordError} />
                    </View>

                    <View>
    <TeamXImageTextInput
        ref={phoneNumberRef}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        image={require('../../images/ic_white_phone.png')}
        placeholder="Phone Number"
        secureTextEntry={true}
        returnKeyType="done"
    />
    <TeamXErrorText errorText={phoneNumberError} />
</View>

                    <TeamXErrorText errorText={signupError} />

                    <TeamXButton onPress={handleSubmitPress} text="SIGNUP" />

                    <TeamXTextedLink
                        value={"Already  have an account?  "}
                        linkValue={"SIGNIN"}
                        handleOnPress={() => navigation.navigate('signin')} />
                </View>
            </ScrollView>
        </View>
    )
};

export default Signup;
