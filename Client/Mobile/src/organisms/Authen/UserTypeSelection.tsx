import React, { useState, useEffect } from "react";
import { FlatList, Image, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "../../styles/styles";
import TeamXCard from "../../molecules/TeamXCard";
import { CardOptions } from "../../helpers/Models/CardOptions";
import TeamXLogoImage from "../../atoms/TeamXLogoImage";
import TeamXErrorText from "../../molecules/TeamXErrorText";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { RoleSelection } from "../../reducers/auth/authSlice";

const UserTypeSelection = ({ navigation }) => {
    const dispatch = useAppDispatch();
    const [error, setError] = useState("");
    const [selectedCard, setSelectedCard] = useState(null); // State to keep track of selected card
    const authen = useAppSelector(state => state.auth);
    // Define your data array
    const cardData = [
        { id: '1', onPress: () => handleCardPress(CardOptions.BPO), imageSource: require('../../images/ic_bpo5.png'), labelText: "BPO" },
        { id: '2', onPress: () => handleCardPress(CardOptions.Agent), imageSource: require('../../images/ic_agent.png'), labelText: "Agent" },
        { id: '3', onPress: () => handleCardPress(CardOptions.Seller), imageSource: require('../../images/ic_seller.png'), labelText: "Seller" },
        { id: '4', onPress: () => handleCardPress(CardOptions.Lawyer), imageSource: require('../../images/ic_lawyer.png'), labelText: "Lawyer" },
    ];

    useEffect(() => {
        if (authen.data.signupToken) {
            navigation.replace('Landing');
        }
        else {
            console.log(authen.data.signupToken)
        }
    }, [authen.screen.error, authen.data.signupToken]);

    function handleCardPress(value) {
        setSelectedCard(value);
    }

    const handleNextpress = () => {
        if (selectedCard) {
            dispatch(RoleSelection(selectedCard, authen.data.Username))
        } else {
            setError("Select type of user to complete signup");
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
        
        <View style={styles.containerStyle}>
            <TeamXLogoImage />
            
            
            <FlatList
                data={cardData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2} />
            <View style={{ marginBottom: 10 }}>
            <TeamXErrorText errorText={error} />
            </View>
            
           

            <View style={[styles.smallbuttonContainer, {}]}>
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
    );
}

export default UserTypeSelection;
