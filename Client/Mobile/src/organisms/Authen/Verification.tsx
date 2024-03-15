import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import {styles} from "../../styles/styles";

const Verification = ({ navigation }) => {
    return (
        <View style={{backgroundColor:"#DAD4B5",flex:1}}>
            <Image source={require('../../../assets/images/person.png')} style={styles.V_image} />
            <Text style={styles.V_verifyTest}>Verify OTP</Text>
            <TextInput placeholder="Enter OTP" style={styles.V_input} />
            <TouchableOpacity style={styles.V_button}  onPress={()=>navigation.navigate('typeselection')}>
                <Text style={styles.V_buttonText}>Verify</Text>
            </TouchableOpacity>
        </View>
    )
};

export default Verification;
