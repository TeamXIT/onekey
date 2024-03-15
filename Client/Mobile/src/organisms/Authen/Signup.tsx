import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import { styles } from '../../styles/styles'
import TeamXTextInput from "../../molecules/TeamXTextInput";

const Signup = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const handleSubmitPress = () => {
    let hasError = false;
    
    if (!username.trim()) {
      setUsernameError('Please provide username.');
      hasError = true;
    } else {
      setUsernameError('');
    }
  
    if (!email.trim()) {
      setEmailError('Please provide email.');
      hasError = true;
    } else {
      setEmailError('');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the entered email matches the email format
    if (!emailRegex.test(email.trim())) {
      setEmailError('Please enter a valid email address.');
      hasError = true;
    }
  
    if (!password.trim()) {
      setPasswordError('Please provide password.');
      hasError = true;
    } else {
      setPasswordError('');
    }
  
    if (!confirmPassword.trim()) {
      setConfirmPasswordError('Please provide confirm password.');
      hasError = true;
    } else if (confirmPassword.trim() !== password.trim()) {
      setConfirmPasswordError('Passwords do not match.');
      hasError = true;
    } else  {
      setConfirmPasswordError('');
    }
     if( username.trim().length<=8){
      setUsernameError('username must be atleast 8 charecters')
      hasError = true;
   } if( email.trim().length<=8){
      setEmailError('email must be atleast 8 charecters')
      hasError = true;
    } if( password.trim().length<=8){
      setPasswordError('password must be atleast 8 charecters')
      hasError = true;
   } if( confirmPassword.trim().length<=8){
      setConfirmPasswordError('confirm password must be atleast 8 charecters')
      hasError = true;
    }
    if (!hasError) {
      navigation.navigate('verification');
    }
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ backgroundColor: "#F2E8C6", flex: 1 }}>
          <Image source={require('../../../assets/images/person.png')} style={styles.image} />
          <TeamXTextInput
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
            maxLength={32}
          />
          {usernameError ? <Text style={{ color: 'red',marginLeft:30}}>{usernameError}</Text> : null}

          <TeamXTextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
            maxLength={32}

          />
          {emailError ? <Text style={{ color: 'red',marginLeft:30}}>{emailError}</Text> : null}

          <TeamXTextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={true}
            maxLength={32}

          />
          {passwordError ? <Text style={{ color: 'red',marginLeft:30}}>{passwordError}</Text> : null}

          <TeamXTextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"
            secureTextEntry={true}
            maxLength={32}

          />
          {confirmPasswordError ? <Text style={{ color: 'red',marginLeft:30}}>{confirmPasswordError}</Text> : null}

          <TouchableOpacity style={styles.button} onPress={handleSubmitPress} >
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30, marginBottom: 100 }}>
            <Text style={styles.text}>Already have an account?  </Text>
            <TouchableOpacity>
              <Text style={[styles.text, { fontWeight: 'bold' }]} onPress={() => navigation.navigate('signin')}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};

export default Signup;
