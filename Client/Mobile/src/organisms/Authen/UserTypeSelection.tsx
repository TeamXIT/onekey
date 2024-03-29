import React, { useState } from "react";
import { FlatList, Image, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "../../styles/styles";
import TeamXCard from "../../molecules/TeamXCard";
import { CardOptions } from "../../helpers/Models/CardOptions";
import TeamXLogoImage from "../../atoms/TeamXLogoImage";
import TeamXErrorText from "../../molecules/TeamXErrorText";

const UserTypeSelection = ({ navigation }) => {
    const [userType, setUserType] = useState("");
    const [error, setError] = useState("");
    const [selectedCard, setSelectedCard] = useState(null); // State to keep track of selected card

    // Define your data array
    const cardData = [
        { id: '1', onPress: () => handleCardPress(CardOptions.BPO), imageSource: require('../../images/ic_bpo5.png'), labelText: "BPO" },
        { id: '2', onPress: () => handleCardPress(CardOptions.Agent), imageSource: require('../../images/ic_agent.png'), labelText: "Agent" },
        { id: '3', onPress: () => handleCardPress(CardOptions.Seller), imageSource: require('../../images/ic_seller.png'), labelText: "Seller" },
        { id: '4', onPress: () => handleCardPress(CardOptions.Lawyer), imageSource: require('../../images/ic_lawyer.png'), labelText: "Lawyer" },
    ];

    function handleCardPress(value) {
        setUserType(value);
        setSelectedCard(value); // Update selected card
    }

    const handleNextpress = () => {
        if (userType) {
            setError("");
            navigation.replace('Landing');
        } else {
            setError("Select type of user to signup");
        }
    };

    const handleBackpress = () => {
        navigation.goBack();
    };
    
    const renderItem = ({ item }) => (
        <TeamXCard
            onPress={item.onPress}
            imageSource={item.imageSource}
            labelText={item.labelText}
            selected={selectedCard === item.labelText} // Pass whether the card is selected
            setSelectedCard={setSelectedCard} // Pass setSelectedCard function
        />
    );
   
    return (
        <ScrollView>
            <View style={styles.containerStyle}>
                <TeamXLogoImage />
                
                <FlatList
                    data={cardData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2} 
                    // You might want to adjust this based on your layout
                />

                <TeamXErrorText errorText={error} />
                
                <View style={[styles.smallbuttonContainer,{}]}>
                    <TouchableOpacity onPress={handleBackpress}>
                        <View style={[styles.BacktouchableContent,]}>
                            <Image source={require('../../images/ic_leftarrow.png')} style={styles.arrowIcon} />
                            <Text style={styles.TextStyle}>Back </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleNextpress}>
                        <View style={[styles.NexttouchableContent,]}>
                            <Text style={styles.TextStyle}> Next</Text>
                            <Image source={require('../../images/ic_rightarrow.png')} style={styles.arrowIcon} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

export default UserTypeSelection;
