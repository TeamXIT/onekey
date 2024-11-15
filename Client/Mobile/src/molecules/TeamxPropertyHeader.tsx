import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TeamxPropertyHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>My Property</Text>
            <TouchableOpacity>
            <Image source={require('../../src/images/ic_house2.png')} style={styles.homeIcon} tintColor={'#EFA61B'}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    homeIcon: {
        width: 30,
        height: 30,
        marginLeft:180
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginLeft:10
    },
});

export default TeamxPropertyHeader;
