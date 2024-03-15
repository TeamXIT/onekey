import { View,Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, Image ,Alert} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import {styles} from '../../styles/styles'
import TeamXTextInput from "../../molecules/TeamXTextInput";
import ButtonComponent from "../../atoms/buttonComponent";
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
        <View style={styles.siup_o_view}>
           <Image source={require('../../../assets/images/person.png')} style={styles.image}/>
          
           <TeamXTextInput
                value={username}
                onChangeText={setUsername}
                placeholder="Username"
            />
            <TeamXTextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                keyboardType="email-address"
            />
            <TeamXTextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry={true}
            />
            <TeamXTextInput
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirm Password"
                secureTextEntry={true}
            />
            <ButtonComponent onPress={handleSubmitPress} text="SIGNUP" />
            <View  style={{flexDirection:'row',justifyContent:'center',marginTop:30,marginBottom:100}}>
              <Text style={styles.text}>Already  have an account?  </Text><TouchableOpacity><Text style={[styles.text,{fontWeight:'bold'}]} onPress={()=>navigation.navigate('signin')}>SIGNIN</Text></TouchableOpacity> 
            </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    )};

export default Signup;
