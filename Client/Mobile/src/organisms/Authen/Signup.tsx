import { View,Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, Image ,Alert} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import { styles } from '../../styles/styles'
import TeamXTextInput from "../../molecules/TeamXTextInput";
import ErrorText from "../../molecules/ErrorText";

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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let hasError = false;

    // Check username
    if (!username.trim()) {
        setUsernameError('Please provide username.');
        hasError = true;
    } else if (username.trim().length < 8) {
        setUsernameError('Username must be at least 8 characters.');
        hasError = true;
    } else {
        setUsernameError('');
    }

    // Check email
    if (!email.trim()) {
        setEmailError('Please provide email.');
        hasError = true;
    } else if (!emailRegex.test(email.trim())) {
        setEmailError('Please enter a valid email address.');
        hasError = true;
    } else if (email.trim().length < 8) {
        setEmailError('Email must be at least 8 characters.');
        hasError = true;
    } else {
        setEmailError('');
    }

    // Check password
    if (!password.trim()) {
        setPasswordError('Please provide password.');
        hasError = true;
    } else if (password.trim().length < 8) {
        setPasswordError('Password must be at least 8 characters.');
        hasError = true;
    } else {
        setPasswordError('');
    }

    // Check confirm password
    if (!confirmPassword.trim()) {
        setConfirmPasswordError('Please provide confirm password.');
        hasError = true;
    } else if (confirmPassword.trim().length < 8) {
        setConfirmPasswordError('Confirm password must be at least 8 characters.');
        hasError = true;
    } else if (confirmPassword.trim() !== password.trim()) {
        setConfirmPasswordError('Passwords do not match.');
        hasError = true;
    } else {
        setConfirmPasswordError('');
    }

    // Navigate only if there are no errors
    if (!hasError) {
        navigation.navigate('verification');
    }
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
          <ErrorText errorText={usernameError}  />
                <TextImageInput
                    value={email}
                    onChangeText={setEmail}
                    image={require('../../../assets/images/ic_email.png')}
                    placeholder="Enter Email"
                    keyboardType="email-address"
                    />
          <ErrorText errorText={emailError}  />
           <TextImageInput
                    value={password}
                    onChangeText={setPassword}
                    image={require('../../../assets/images/ic_eye.png')}
                    placeholder="New Password"
                    secureTextEntry={true}
                    returnKeyType="done"
                />
          <ErrorText errorText={passwordError}  />
             <TextImageInput
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    image={require('../../../assets/images/ic_eye.png')}
                    placeholder="Confirm  Password"
                    secureTextEntry={true}
                    returnKeyType="done"
                />
           <ErrorText errorText={confirmPasswordError}  />
            <ButtonComponent onPress={handleSubmitPress} text="SIGNUP" />
            <View  style={styles.bottom_text}>
              <Text style={styles.text}>Already  have an account?  </Text><TouchableOpacity><Text style={[styles.text,{fontWeight:'bold'}]} onPress={()=>navigation.navigate('signin')}>SIGNIN</Text></TouchableOpacity> 
            </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    )};
export default Signup;
