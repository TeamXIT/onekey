import { Text, View, Image, Switch, TouchableOpacity, Alert } from "react-native"
import { styles } from "../../styles/styles";
import TeamXTextInput from "../../molecules/TeamXTextInput";
import { useState } from "react";
import ErrorText from "../../molecules/ErrorText";
import RememberSwitch from "../../molecules/RememberSwitch";

const Signin = ({ navigation }) => {
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
        <View style={styles.mainContainer}>
            <View style={{ alignItems: 'center' }}>
                <Image
                    source={require('../../../assets/images/ic_user.png')}
                    style={styles.logoimg}
                />
                <View>
                    <Text style={{ fontSize: 20 }}>Signin Here</Text>
                </View>
            </View>
            <View style={{ marginLeft: -15 }}>
                <View>
                    <TeamXTextInput
                        value={username}
                        onChangeText={setUsername}
                        placeholder="Enter Username"
                        keyboardType="email-address"
                        returnKeyType="next"
                        maxLength={32}

                    />
                    <ErrorText errorText={usernameError} />

                </View>
                <View >
                    <TeamXTextInput
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Enter Password"
                        secureTextEntry={true}
                        returnKeyType="done"
                        maxLength={32}

                    />
                </View>
                <ErrorText errorText={passwordError} />

            </View>
            <View style={styles.s_r_view}>
                <View style={styles.s_r_view1}>
                    <RememberSwitch
                        isRemember={isRemember}
                        setIsRemember={setIsRemember}
                    />
                </View>
                <View style={styles.s_f_view}>
                    <Text
                        style={styles.headerTextStyle}
                        onPress={() => navigation.navigate('forgotPassword')}>
                        Forgot Password
                    </Text>
                </View>
            </View>
            <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={handleSubmitPress}>
                    <Text style={styles.buttonTextStyle}>SIGNIN</Text>
                </TouchableOpacity>
            </View>

            <Text
                style={styles.pressableTextStyle}
                onPress={() => navigation.navigate('signup')}>
                Don't have an account ? SIGNUP HERE
            </Text>
        </View>
    );
}

export default Signin;