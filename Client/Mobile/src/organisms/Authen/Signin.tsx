import { Text, View, TouchableOpacity } from "react-native"
import { styles } from "../../styles/styles";
import { useState } from "react";
import TeamXButton from "../../atoms/TeamXButton";
import TeamXImageTextInput from "../../atoms/TeamXImageTextInput";
import TeamXSwitch from "../../molecules/TeamXSwitch";
import TeamXLogoImage from "../../atoms/TeamXLogoImage";
import TeamXHeaderText from "../../atoms/TeamXHeaderText";
import TeamXTextedLink from "../../molecules/TeamXTextedLink";
import { useAppDispatch } from "../../reducers/hooks";
import TeamXErrorText from "../../molecules/TeamXErrorText";

const Signin = ({ navigation }) => {
    const dispatch = useAppDispatch()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isRemember, setIsRemember] = useState(false);
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmitPress = () => {
        let hasError = false;
        if (!username.trim()) {
            setUsernameError('Please provide username.');
            hasError = true;
        } else if (username.trim().length < 8) {
            setUsernameError('Username must be at least 8 characters.');
            hasError = true;
        } else {
            setUsernameError('');
        }
        if (!password.trim()) {
            setPasswordError('Please provide password.');
            hasError = true;
        } else if (password.trim().length < 8) {
            setPasswordError('Password must be at least 8 characters.');
            hasError = true;
        } else {
            setPasswordError('');
        }
        if (!hasError) {
            navigation.navigate('verification');
        }
    }
    return (
        <View style={styles.containerStyle}>
            <TeamXLogoImage />
            <TeamXHeaderText value="SIGNIN" />
            <View style={{ marginLeft: -15 }}>
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