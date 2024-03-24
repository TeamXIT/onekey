import { View, ScrollView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from '../../styles/styles'
import TeamXLogoImage from "../../atoms/TeamXLogoImage";
import TeamXImageTextInput from "../../atoms/TeamXImageTextInput";
import TeamXErrorText from "../../molecules/TeamXErrorText";
import TeamXHeaderText from "../../atoms/TeamXHeaderText";
import TeamXButton from "../../atoms/TeamXButton";
import TeamXTextedLink from "../../molecules/TeamXTextedLink";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { UserSignup } from "../../reducers/auth/authSlice";

const Signup = ({ navigation }) => {
    const dispatch = useAppDispatch();
    const authen = useAppSelector(state => state.auth);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    useEffect(() => {
        if (authen.screen.error!=='') {
            setPasswordError('Invalid password. Please try again.');
        } else if (authen.data.SignupUsername) {
            navigation.navigate('verification');
        }
    }, [authen.screen.error, authen.data.SignupUsername, navigation]);

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
        if (!hasError) {
            dispatch(UserSignup(username, email, password, confirmPassword))
                .then((success) => {
                    if (success.success) {
                        navigation.navigate('verification'); // Navigate to verification screen upon successful signup
                    }
                    else {
                        Alert.alert('Error',success.message)
                    }
                })
    }
}
    return (
        <ScrollView>
            <View style={styles.containerStyle}>
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
                    />
                    <TeamXErrorText errorText={usernameError} />
                </View>
                <View>
                    <TeamXImageTextInput
                        value={email}
                        onChangeText={setEmail}
                        image={require('../../images/ic_email.png')}
                        placeholder="Enter Email"
                        keyboardType="email-address"
                    />
                    <TeamXErrorText errorText={emailError} />
                </View>
                <View>
                    <TeamXImageTextInput
                        value={password}
                        onChangeText={setPassword}
                        image={require('../../images/ic_eye.png')}
                        placeholder="New Password"
                        secureTextEntry={true}
                        returnKeyType="done"
                    />
                    <TeamXErrorText errorText={passwordError} />
                </View>
                <View>
                    <TeamXImageTextInput
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        image={require('../../images/ic_eye.png')}
                        placeholder="Confirm  Password"
                        secureTextEntry={true}
                        returnKeyType="done"
                    />
                    <TeamXErrorText errorText={confirmPasswordError} />
                </View>
                <TeamXButton onPress={handleSubmitPress} text="SIGNUP" />
                <TeamXTextedLink
                    value={"Already  have an account?  "}
                    linkValue={"SIGNIN"}
                    handleOnPress={() => navigation.navigate('signin')} />
            </View>
        </ScrollView>
    )
};
export default Signup;
