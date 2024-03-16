//usertypeselection.tsx
import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity, Alert } from "react-native";
import { styles } from "../../styles/styles";
import TeamXCard from "../../molecules/TeamXCard";
import { CardOptions } from "../../helpers/Models/CardOptions";
import LogoImage from "../../atoms/logo";

const UserTypeSelection = ({ navigation }) => {
    const [userType, setUserType] = useState("");

    function handleCardPress(value: CardOptions): void {
        setUserType(value);
    }

    const handlenextpress = () => {
        navigation.navigate('Landing');
    };

    const handlebackpress = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.US_container}>
            <View style={styles.US_logoContainer}>
                <LogoImage/>
            </View>
            <View style={styles.US_cardsContainer1}>
                <TeamXCard
                    onPress={() => handleCardPress(CardOptions.BPO)}
                    imageSource={require('../../../asserts/Images/ic_bpo5.png')}
                    labelText="BPO"
                />
                <TeamXCard
                    onPress={() => handleCardPress(CardOptions.Agent)}
                    imageSource={require('../../../asserts/Images/ic_user.png')}
                    labelText="Agent"
                />
            </View>
            <View style={styles.cardsContainer2}>
                <TeamXCard
                    onPress={() => handleCardPress(CardOptions.Seller)}
                    imageSource={require('../../../asserts/Images/ic_seller.png')}
                    labelText="Seller"
                />
                <TeamXCard
                    onPress={() => handleCardPress(CardOptions.Lawyer)}
                    imageSource={require('../../../asserts/Images/ic_lawyer.png')}
                    labelText="Lawyer"
                />
            </View>
            <View style={styles.smallbuttonContainer}>
                <TouchableOpacity onPress={handlebackpress}>
                    <View style={styles.BacktouchableContent}>
                        <Image source={require('../../../asserts/Images/ic_leftarrow.png')} style={styles.arrowIcon} />
                        <Text style={styles.TextStyle}>Back </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlenextpress}>
                    <View style={styles.NexttouchableContent}>
                        <Text style={styles.TextStyle}> Next</Text>
                        <Image source={require('../../../asserts/Images/ic_rightarrow.png')} style={styles.arrowIcon} />
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default UserTypeSelection;