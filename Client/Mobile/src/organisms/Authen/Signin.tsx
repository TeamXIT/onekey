import { Text, View, Image, Switch, TouchableOpacity, Alert } from "react-native"
import { styles } from "../../styles/styles";
import TeamXTextInput from "../../molecules/TeamXTextInput";
import { useState } from "react";
import ErrorText from "../../molecules/ErrorText";
import ButtonComponent from "../../atoms/TeamXbutton";
import LogoImage from "../../atoms/logo";
import TextImageInput from "../../atoms/ImageBasedTextInput";

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
            <LogoImage />
           
            </View>
            <View style={{marginLeft:-15}}>
            <View style={styles.SectionStyle}>
                <TextImageInput
                    value={username}
                    onChangeText={setUsername}
                    image={require('../../../assets/images/ic_user.png')}
                    placeholder="Enter Username"
                    keyboardType="email-address"
                    returnKeyType="next"
                />
            </View>
            <View style={styles.SectionStyle}>
                <TextImageInput
                    value={password}
                    onChangeText={setPassword}
                    image={require('../../../assets/images/ic_eye.png')}
                    placeholder="Enter Password"
                    secureTextEntry={true}
                    returnKeyType="done"
                />
            </View>
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
            <ButtonComponent onPress={handleSubmitPress} text="SIGNIN" />

            <View  style={styles.bottom_text}>
              <Text style={styles.text}>Don't have an account?  </Text><TouchableOpacity><Text style={[styles.text,{fontWeight:'bold'}]} onPress={()=>navigation.navigate('signup')}>SIGNUP</Text></TouchableOpacity> 
            </View>
        </View>
    );
}

export default Signin;