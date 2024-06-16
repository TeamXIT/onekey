import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from "../../styles/styles";
import LinearGradient from 'react-native-linear-gradient';


const Settings = ({ navigation }) => {
    return (
        <View style={styles.SettingmainContainer}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Contacts')}
            >
                <LinearGradient
                    colors={['#888693', '#35314A']}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    style={{ height: 45, width: 280, borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}
                >
                    <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Contacts</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('MyPropertyScreen2')}
            >
                <LinearGradient
                    colors={['#888693', '#35314A']}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    style={{ height: 45, width: 280, borderRadius: 40, justifyContent: 'center', alignItems: 'center',marginTop:20 }}
                >
                    <Text style={{ color: '#FFFFFF', fontSize: 16 }}>My Property</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}
export default Settings;
