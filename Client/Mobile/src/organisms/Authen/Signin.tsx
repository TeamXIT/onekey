import { Text,View, TextInput,Keyboard, Image, Switch, TouchableOpacity, Alert} from "react-native"
import { styles } from "../../styles/styles";
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
                                autoCapitalize="none"
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
        <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: 10 }}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Switch trackColor={{false: '#767577', true: styles.appColor.color}} thumbColor={isRemember ? styles.appColor.color : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e" onValueChange={setIsRemember} value={isRemember}/>
                                <Text style={styles.headerTextStyle}>Remember</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
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