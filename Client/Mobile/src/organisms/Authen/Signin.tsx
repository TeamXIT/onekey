import { Alert, Text, View } from "react-native"
import { styles } from "../../styles/styles";
import { useEffect, useState, } from "react";
import TeamXButton from "../../atoms/TeamXbutton";
import TeamXImageTextInput from "../../atoms/TeamXImageTextInput";
import TeamXSwitch from "../../molecules/TeamXSwitch";
import TeamXLogoImage from "../../atoms/TeamXLogoImage";
import TeamXHeaderText from "../../atoms/TeamXHeaderText";
import TeamXTextedLink from "../../molecules/TeamXTextedLink";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import TeamXErrorText from "../../molecules/TeamXErrorText";
import { UserSignin } from "../../reducers/auth/authSlice";

const Signin = ({ navigation }) => {
    const dispatch = useAppDispatch()
    const authen = useAppSelector(state => state.auth);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isRemember, setIsRemember] = useState(false);
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    useEffect(() => {
        if (authen.data.SigninAuthToken) {
            if (!authen.screen.error) {
                navigation.navigate('verification');
            }
            else {
                Alert.alert("Warning", authen.screen.error)
            }
        }
    }, [authen.data.SigninAuthToken])

    const handleSubmitPress = () => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        let hasError = false;
        if (!username.trim()) {
            setUsernameError('Please provide username.');
            hasError = true;
        } else if (username.trim().length < 4) {
            setUsernameError('Username must be at least 4 characters.');
            hasError = true;
        } else {
            setUsernameError('');
        }
        if (!password.trim()) {
            setPasswordError('Please provide password.');
            hasError = true;
        } else if (!passwordRegex.test(password.trim())) {
            setPasswordError('Password must have minimum 8 characters, at least one lowercase letter, one uppercase letter, and one numeric character.');
            hasError = true;
        } else {
            setPasswordError('');
        }
        if (passwordError !== '') {
            setPasswordError('Invalid password. Please try again.');
            hasError = true;
        }
        if (!hasError) {
            dispatch(UserSignin(username, password))
        }
    }
    return (
        <View style={styles.containerStyle}>
            <TeamXLogoImage />
            <TeamXHeaderText value="SIGNIN" />
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
                    value={password}
                    onChangeText={setPassword}
                    image={require('../../images/ic_eye.png')}
                    placeholder="Enter Password"
                    secureTextEntry={true}
                    returnKeyType="done"
                />
                <TeamXErrorText errorText={passwordError} />
            </View>
            <View style={styles.stackHEdgeStyle}>
                <TeamXSwitch
                    isRemember={isRemember}
                    setIsRemember={setIsRemember}
                    value="Remember"
                />
                <Text
                    style={styles.switchTextStyle}
                    onPress={() => navigation.navigate('forgotPassword')}>
                    Forgot Password
                </Text>
            </View>

            <TeamXButton onPress={handleSubmitPress} text="SIGNIN" />

            <TeamXTextedLink
                value={"Don't have an account?  "}
                linkValue={"SIGNUP"}
                handleOnPress={() => navigation.navigate('signup')} />
        </View>
    );
}

export default Signin;



