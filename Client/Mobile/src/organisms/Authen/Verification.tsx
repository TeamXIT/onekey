import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import {styles} from "../../styles/styles";
import { useState } from "react";
import TeamXTextInput from "../../molecules/TeamXTextInput";
import ButtonComponent from "../../atoms/buttonComponent";

const Verification = ({ navigation }) => {
    const[otp,setOtp]=useState('');
    const verify=()=>{
        if(otp==''){
            return Alert.alert('Invalid','Enter valid OTP')
        }
        navigation.navigate('typeselection')
    }

    return (
        <View style={{backgroundColor:"#DAD4B5",flex:1}}>
            <Image source={require('../../../assets/images/person.png')} style={styles.image} />
            <Text style={styles.V_verifyTest}>Verify OTP</Text>
            <View style={styles.SectionStyle}>
                <TeamXTextInput
                    value={otp}
                    onChangeText={setOtp}
                    placeholder="Enter OTP"
                    secureTextEntry={true}
                    returnKeyType="done"
                />
            </View>
            <ButtonComponent onPress={verify} text="VERIFY" />
        </View>
    )
};

export default Verification;
