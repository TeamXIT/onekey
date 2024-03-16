import { View,Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, Image ,Alert} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import {styles} from '../../styles/styles'
import ButtonComponent from "../../atoms/TeamXbutton";
import LogoImage from "../../atoms/logo";
import TextImageInput from "../../atoms/ImageBasedTextInput";

const Signup = ({navigation}) =>{
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleSubmitPress = () => {    
    if (!username) {
        Alert.alert('Invalid , Enter user name')
        return;
    }
    if (!email) {
        Alert.alert('Invalid , Enter email')
        return;
    }
    if (!password) {
        Alert.alert('Invalid , Enter password')
      return;
    }
    if (!confirmPassword) {
        Alert.alert('Invalid , Enter conform password')
      return;
    }
    if(password!=confirmPassword){
        Alert.alert('Invalid, Enter valid password')
        return;
    }
     navigation.navigate('verification')
  }
  return (
      <SafeAreaView>
        <ScrollView>
        <View style={styles.siup_outer_view}>
        <LogoImage />
        <View style={{alignItems:'center'}}>
                <Text style={styles.screenHeader}>Signup</Text>
                </View>
                <TextImageInput
                    value={username}
                    onChangeText={setUsername}
                    image={require('../../../assets/images/ic_user.png')}
                    placeholder="Enter Username"
                    keyboardType="email-address"
                    returnKeyType="next"
                />
                <TextImageInput
                    value={email}
                    onChangeText={setEmail}
                    image={require('../../../assets/images/ic_email.png')}
                    placeholder="Enter Email"
                    keyboardType="email-address"
                    />
           <TextImageInput
                    value={password}
                    onChangeText={setPassword}
                    image={require('../../../assets/images/ic_eye.png')}
                    placeholder="New Password"
                    secureTextEntry={true}
                    returnKeyType="done"
                />
             <TextImageInput
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    image={require('../../../assets/images/ic_eye.png')}
                    placeholder="Confirm  Password"
                    secureTextEntry={true}
                    returnKeyType="done"
                />
            <ButtonComponent onPress={handleSubmitPress} text="SIGNUP" />
            <View  style={styles.bottom_text}>
              <Text style={styles.text}>Already  have an account?  </Text><TouchableOpacity><Text style={[styles.text,{fontWeight:'bold'}]} onPress={()=>navigation.navigate('signin')}>SIGNIN</Text></TouchableOpacity> 
            </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    )};
export default Signup;
