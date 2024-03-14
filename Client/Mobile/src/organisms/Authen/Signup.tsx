import { View,Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, Image ,Alert} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import {styles} from '../../styles/styles'

const Signup=({navigation}) =>{
  const [userName,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [conformPassword,setCoformPassword]=useState('');
  

  const handleSubmitPress = () => { 
    
    if (!userName) {
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
    if (!conformPassword) {
        Alert.alert('Invalid , Enter conform password')
      return;
    }
    if(password!=conformPassword){
        Alert.alert('Invalid, Enter valid password')
        return;
    }
    navigation.navigate('Verification')
  }
  return (
      <SafeAreaView>
        <ScrollView>
        <View style={{backgroundColor:"#F2E8C6",flex:1}}>
           <Image source={require('../../../assets/images/person.png')} style={styles.image}/>
            <TextInput placeholder=" Username" style={styles.input} onChange={(UserName)=>{setUsername(UserName)}}/>
            <TextInput placeholder=" Email" style={styles.input} onChange={(email)=>{setEmail(email)}}/>
            <TextInput placeholder=" Password"  secureTextEntry={true} style={styles.input} onChange={(password)=>{setPassword(password)}}/>
            <TextInput placeholder= "Conform Password" secureTextEntry={true} style={styles.input} onChange={(conformPassword)=>{setCoformPassword(conformPassword)}}/>
            <TouchableOpacity style={styles.button} onPress={handleSubmitPress} >
                <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
            <View  style={{flexDirection:'row',justifyContent:'center',marginTop:30,marginBottom:100}}>
              <Text style={styles.text}>Already  have an account?  </Text><TouchableOpacity><Text style={[styles.text,{fontWeight:'bold'}]} onPress={()=>navigation.navigate('signin')}>Login</Text></TouchableOpacity> 
            </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    )};

export default Signup;




































