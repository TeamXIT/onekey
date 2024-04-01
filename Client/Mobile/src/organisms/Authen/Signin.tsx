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
import { UserSignin } from "../../reducers/auth/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";
import TeamXLoader from "../../molecules/TeamXLoader";

const Signin = ({ navigation }) => {
    const dispatch = useAppDispatch()
    const authen = useAppSelector(state => state.auth);

    const [username, setUsername] = useState('teamx');
    const [password, setPassword] = useState('Teamx@123');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [signinError, setSigninError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const passwordRef = useRef(null);

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
            AsyncStorage.setItem('username', authen.data.Username).then(() => {
                AsyncStorage.setItem('password', password).then(() => {
                    AsyncStorage.setItem('AuthToken', authen.data.AuthToken).then(() => {
                        navigation.replace('Landing');
                    });
                });
            });
        }
        setIsLoading(false);
    }, [authen.screen.error, authen.data.AuthToken]);

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
        }
        if (!hasError) {
            setIsLoading(true);
            setSigninError('');
            dispatch(UserSignin(username, password))
            setPasswordError('');
        }
    }

    return (
        <View style={[styles.containerStyle, { padding: 0, gap: 0 }]}>
            <TeamXLoader loading={isLoading} />
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} >
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
                            onSubmitEditing={() => { passwordRef.current?.focus() }} // Focus on password field when "Enter" is pressed
                        />
                        <TeamXErrorText errorText={usernameError} />
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

                    <Text
                        style={styles.switchTextStyle}
                        onPress={() => navigation.replace('forgotPassword')}>
                        Forgot Password
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
