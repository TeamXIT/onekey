import { Text, View, Image, Switch, TouchableOpacity, Alert } from "react-native"
import { styles } from "../../styles/styles";
import TeamXTextInput from "../../molecules/TeamXTextInput";
import { useState } from "react";
import ButtonComponent from "../../atoms/buttonComponent";

const Signin = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isRemember, setIsRemember] = useState(false);
    const handleSubmitPress = () => {
        if (!username) {
            return Alert.alert('Invalid', 'Enter User Name');

        }
        if (!password) {
            return Alert.alert('Invalid', 'Enter Password')

        }
        navigation.navigate('Landing');
    }
    return (
        <View style={styles.mainContainer}>
            <View style={{ alignItems: 'center' }}>
                <Image
                    source={require('../../../assets/images/ic_user.png')}
                    style={styles.logoimg}
                />
            <View>
                <Text style={styles.screenHeader}>Signin</Text>
                </View>
            </View>
            <View style={{marginLeft:-15}}>
            <View style={styles.SectionStyle}>
                <TeamXTextInput
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Enter Username"
                    keyboardType="email-address"
                    returnKeyType="next"
                />
            </View>
            <View style={styles.SectionStyle}>
                <TeamXTextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Enter Password"
                    secureTextEntry={true}
                    returnKeyType="done"
                />
            </View>
            </View>
            <View style={styles.s_r_view}>
                <View style={styles.s_r_view1}>
                    <Switch trackColor={{ false: styles.appSwitchFalse.color, true: styles.appColor.color }} thumbColor={isRemember ? styles.appColor.color :styles.appSwitchTumbFalse.color}
                         onValueChange={setIsRemember} value={isRemember} />
                    <Text style={styles.headerTextStyle}>Remember</Text>
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

            <View  style={{flexDirection:'row',justifyContent:'center',marginTop:30,marginBottom:100}}>
              <Text style={styles.text}>Don't have an account?  </Text><TouchableOpacity><Text style={[styles.text,{fontWeight:'bold'}]} onPress={()=>navigation.navigate('signup')}>SIGNUP</Text></TouchableOpacity> 
            </View>
        </View>
    );
}

export default Signin;