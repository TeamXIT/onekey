import { Text,View, TextInput,Keyboard, Image, Switch, TouchableOpacity, Alert} from "react-native"
import { styles, switchcolor1, switchcolor2, switchcolor3 } from "../../styles/styles";
import { useState } from "react";

const Signin = ({navigation}) => {
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[isRemember,setIsRemember]=useState(false);
    const [errortext, setErrortext] = useState('');
    const handleSubmitPress = () => {
        if (!username) {
            return Alert.alert('Invalid','Enter User Name');
            
        }
        if (!password) {
            return Alert.alert('Invalid','Enter Password')
           
        } 
        navigation.navigate('Landing');
    }
    return(
    <View style={styles.mainContainer}>
         <View style={{ alignItems: 'center' }}>
                            <Image
                                source={require('../../../assets/images/test_logo.png')}
                                style={styles.logoimg}
                            />
                            <Text style={{ fontSize: 20 }}>Signin Here</Text>
                        </View>
        <View style={styles.SectionStyle}>
                            <TextInput
                                style={styles.inputStyle}
                                onChangeText={(Username) =>
                                    setUsername(Username)
                                }
                                placeholder="Enter Username" //dummy@abc.com
                                placeholderTextColor="#8b9cb5"
                                returnKeyType="next"
                            />
        </View>
        <View style={styles.SectionStyle}>
                            <TextInput
                                style={styles.inputStyle}
                                onChangeText={(UserPassword) =>
                                    setPassword(UserPassword)
                                }
                                placeholder="Enter Password" //12345
                                placeholderTextColor="#8b9cb5"
                                keyboardType="default"
                                onSubmitEditing={Keyboard.dismiss}
                                secureTextEntry={true}
                                returnKeyType="next"
                            />
        </View>
        <View style={styles.s_r_view}>
                            <View style={styles.s_r_view1}>
                                <Switch trackColor={{false: switchcolor1, true: styles.appColor.color}} thumbColor={isRemember ? styles.appColor.color : switchcolor2}
                                    ios_backgroundColor={switchcolor3} onValueChange={setIsRemember} value={isRemember}/>
                                <Text style={styles.headerTextStyle}>Remember</Text>
                            </View>
                            <View style={styles.s_f_view}>
                                <Text
                                    style={styles.headerTextStyle}
                                    onPress={() => Alert.alert('Forgot Password')}>
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
                            onPress={() => navigation.navigate('RegisterScreen')}>
                            Don't have an account ? SIGNUP HERE
                        </Text>
    </View>
    );
}

export default Signin;