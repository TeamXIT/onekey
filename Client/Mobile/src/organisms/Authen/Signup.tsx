import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import { styles } from '../../styles/styles'
import TeamXLogoImage from "../../atoms/TeamXLogoImage";
import TeamXImageTextInput from "../../atoms/TeamXImageTextInput";
import TeamXErrorText from "../../molecules/TeamXErrorText";
import TeamXHeaderText from "../../atoms/TeamXHeaderText";
import ButtonComponent from "../../atoms/TeamXbutton";
import TeamXTextedLink from "../../molecules/TeamXTextedLink";

const Signup = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleSubmitPress = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let hasError = false;

        // Check username
        if (!username.trim()) {
            setUsernameError('Please provide username.');
            hasError = true;
        } else if (username.trim().length < 8) {
            setUsernameError('Username must be at least 8 characters.');
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
        } else if (password.trim().length < 8) {
            setPasswordError('Password must be at least 8 characters.');
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

        // Navigate only if there are no errors
        if (!hasError) {
            navigation.navigate('verification');
        }
    }

    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                <TeamXLogoImage />
                <TeamXHeaderText value="SIGNUP" />
                <TeamXImageTextInput
                    value={username}
                    onChangeText={setUsername}
                    image={require('../../images/ic_user.png')}
                    placeholder="Enter Username"
                    keyboardType="email-address"
                    returnKeyType="next"
                />
                <TeamXErrorText errorText={usernameError} />
                <TeamXImageTextInput
                    value={email}
                    onChangeText={setEmail}
                    image={require('../../images/ic_email.png')}
                    placeholder="Enter Email"
                    keyboardType="email-address"
                />
                <TeamXErrorText errorText={emailError} />
                <TeamXImageTextInput
                    value={password}
                    onChangeText={setPassword}
                    image={require('../../images/ic_eye.png')}
                    placeholder="New Password"
                    secureTextEntry={true}
                    returnKeyType="done"
                />
                <TeamXErrorText errorText={passwordError} />
                <TeamXImageTextInput
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    image={require('../../images/ic_eye.png')}
                    placeholder="Confirm  Password"
                    secureTextEntry={true}
                    returnKeyType="done"
                />
                <TeamXErrorText errorText={confirmPasswordError} />
                <ButtonComponent onPress={handleSubmitPress} text="SIGNUP" />
                <TeamXTextedLink
                    value={"Already  have an account?  "}
                    linkValue={"SIGNIN"}
                    handleOnPress={() => navigation.navigate('signin')} />
            </View>
        </ScrollView>
    )
};
export default Signup;
