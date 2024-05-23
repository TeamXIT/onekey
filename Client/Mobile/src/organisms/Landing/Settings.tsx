import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {  styles } from "../../styles/styles";

const Settings = ({ navigation }) => {
    return (
        <View style={styles.SettingmainContainer}>
            <TouchableOpacity
                style={styles.SettingcontactButton}
                onPress={() => navigation.navigate('Contacts')}
            >
                <Text style={styles.SettingcontactButtonText}>Contacts</Text>
            </TouchableOpacity>
        </View>
    );
}
export default Settings;
