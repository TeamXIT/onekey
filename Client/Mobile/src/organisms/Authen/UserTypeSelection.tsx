import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { styles } from "../../styles/styles";
import TeamXCard from "../../molecules/TeamXCard";
import { CardOptions } from "../../helpers/Models/CardOptions";
import TeamXLogoImage from "../../atoms/TeamXLogoImage";

const UserTypeSelection = ({ navigation }) => {
    const [userType, setUserType] = useState("");

    function handleCardPress(value: CardOptions): void {
        setUserType(value);
    }

    const handleNextpress = () => {
        if (userType) {
            navigation.navigate('Landing');
        }
    };

    const handleBackpress = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.containerStyle}>
            <TeamXLogoImage />
            
            <View style={styles.US_cardsContainerStyle}>
                <TeamXCard
                    onPress={() => handleCardPress(CardOptions.BPO)}
                    imageSource={require('../../images/ic_bpo5.png')}
                    labelText="BPO"
                />
                <TeamXCard
                    onPress={() => handleCardPress(CardOptions.Agent)}
                    imageSource={require('../../images/ic_user.png')}
                    labelText="Agent"
                />
            </View>
            <View style={styles.US_cardsContainerStyle}>
                <TeamXCard
                    onPress={() => handleCardPress(CardOptions.Seller)}
                    imageSource={require('../../images/ic_seller.png')}
                    labelText="Seller"
                />
                <TeamXCard
                    onPress={() => handleCardPress(CardOptions.Lawyer)}
                    imageSource={require('../../images/ic_lawyer.png')}
                    labelText="Lawyer"
                />
            </View>
            <View style={styles.smallbuttonContainer}>
                <TouchableOpacity onPress={handleBackpress}>
                    <View style={styles.BacktouchableContent}>
                        <Image source={require('../../images/ic_leftarrow.png')} style={styles.arrowIcon} />
                        <Text style={styles.TextStyle}>Back </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNextpress}>
                    <View style={styles.NexttouchableContent}>
                        <Text style={styles.TextStyle}> Next</Text>
                        <Image source={require('../../images/ic_rightarrow.png')} style={styles.arrowIcon} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default UserTypeSelection;