import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

const TeamxBottomSheet = ({ visible, onClose, children }) => {
    if (!visible) {
        return null;
    }

    return (
        <View style={styles.TeamxBottomSheetcontainer}>
            <TouchableOpacity style={styles.TeamxBottomSheetbackdrop} onPress={onClose} />
            <View style={styles.TeamxBottomSheetbottomsheet}>
                <View style={styles.TeamxBottomSheetheader}>
                    <Text style={styles.TeamxBottomSheetheaderText}>Details</Text>
                    <TouchableOpacity onPress={onClose}>
                        <Text style={styles.TeamxBottomSheetheaderText}>Close</Text>
                    </TouchableOpacity>
                </View>
                {children}
            </View>
        </View>
    );
}
export default TeamxBottomSheet;