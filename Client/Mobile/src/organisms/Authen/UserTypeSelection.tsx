import React from "react";
import { Image, Text, View, TouchableOpacity, Alert } from "react-native";
import { styles } from "../../styles/styles";

const UserTypeSelection = ({navigation}) => {
    const handleCardPress = () => {
       
        console.log('Card pressed!');
    };
    const handlenextpress = () => {
        navigation.navigate('Landing')
        console.log('next pressed!');
    };
    const handlebackpress = () => {
         Alert.alert('back');
        //console.log('back pressed!');
    };

    return (
        <View style={styles.US_container}>
            <View style={styles.US_logo}>
                <Image source={require('../../../asserts/Images/ic_user.png')} />
            </View>
            <View style={styles.US_cardsContainer1}>
                <TouchableOpacity style={[styles.cards,styles.enhancedCard]} onPress={handleCardPress} activeOpacity={0.7}>
                    <Image source={require('../../../asserts/Images/ic_bpo5.png')} style={styles.cardIcon} />
                    <Text style={styles.cardText}>BPO</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.cards,styles.enhancedCard]} onPress={handleCardPress} activeOpacity={0.7}>
                    <Image source={require('../../../asserts/Images/ic_user.png')} style={styles.cardIcon} />
                    <Text style={styles.cardText}>Agent</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardsContainer2}>
                <TouchableOpacity style={[styles.cards,styles.enhancedCard]} onPress={handleCardPress} activeOpacity={0.7}>
                    <Image source={require('../../../asserts/Images/ic_seller.png')} style={styles.cardIcon} />
                    <Text style={styles.cardText}>Seller</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.cards,styles.enhancedCard]} onPress={handleCardPress} activeOpacity={0.7}>
                    <Image source={require('../../../asserts/Images/ic_lawyer.png')} style={styles.cardIcon} />
                    <Text style={styles.cardText}>Lawyer</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handlebackpress}>
                    <View style={[styles.touchableContent, { marginRight: 100, marginLeft: 0, backgroundColor: '#F2E8C6' }]}>
                        <Image source={require('../../../asserts/Images/ic_leftarrow.png')} style={styles.arrowIcon} />
                        <Text style={styles.BackTextStyle}>Back </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handlenextpress}>
                    <View style={styles.touchableContent}>
                        <Text style={styles.TextStyle}> Next</Text>
                        <Image source={require('../../../asserts/Images/ic_rightarrow.png')} style={styles.arrowIcon} />
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default UserTypeSelection;