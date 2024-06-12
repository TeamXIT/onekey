import React, { useState, useEffect } from "react";
import { FlatList, Image, Text, View, TouchableOpacity } from "react-native";
import { styles } from "../../styles/styles";
import TeamXCard from "../../molecules/TeamXCard";
import { CardOptions } from "../../helpers/Models/CardOptions";
import TeamXLogoImage from "../../atoms/TeamXLogoImage";
import TeamXErrorText from "../../molecules/TeamXErrorText";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { RoleSelection } from "../../reducers/auth/authSlice";
import TeamXLoader from "../../molecules/TeamXLoader";
import TeamXButton from "../../atoms/TeamXButton";
import TeamXTextedLink from "../../molecules/TeamXTextedLink";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserTypeSelection = ({ navigation }) => {
    const dispatch = useAppDispatch();
    const [error, setError] = useState("");
    const [selectedCard, setSelectedCard] = useState(0); // State to keep track of selected card
    const authen = useAppSelector(state => state.auth);
    const [isSignupSuccess, setSignupSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    // Define your data array
    const cardData = [
        { id: '1', onPress: () => handleCardPress(CardOptions.Seller), imageSource: require('../../images/ic_seller.png'), labelText: "Seller" },
        { id: '2', onPress: () => handleCardPress(CardOptions.Agent), imageSource: require('../../images/ic_agent.png'), labelText: "Agent" },
        { id: '3', onPress: () => handleCardPress(CardOptions.BPO), imageSource: require('../../images/ic_bpo5.png'), labelText: "BPO" },
        { id: '4', onPress: () => handleCardPress(CardOptions.Lawyer), imageSource: require('../../images/ic_lawyer.png'), labelText: "Lawyer" },
        { id: '5', onPress: () => handleCardPress(CardOptions.ProductOwner), imageSource: require('../../images/ic_lawyer.png'), labelText: "Product Owner" },
    ];

    useEffect(() => {
         if (authen.data.UserType) {
         setSignupSuccess(true);
             setTimeout(() => {
                navigation.replace('dashboard');
                 setSignupSuccess(false);
             }, 3000);
         }
        setIsLoading(false);
    }, [authen.screen.error, authen.data.UserType]);

    function handleCardPress(option: number) {
        setSelectedCard(option);
    }

    const handleNextpress = async() => {
        if (selectedCard > 0) {
            setIsLoading(true);
            dispatch(RoleSelection(selectedCard, authen.data.Username))
             await AsyncStorage.setItem('role',selectedCard.toString())
        } else {
            setError("Select type of user to complete signup");
        }
    };

    const renderItem = ({ item }) => (
        <TeamXCard
            onPress={item.onPress}
            id={item.id}
            imageSource={item.imageSource}
            labelText={item.labelText}
            selected={selectedCard === item.id} // Pass whether the card is selected
            setSelectedCard={setSelectedCard} // Pass setSelectedCard function
        />
    );

    if (isSignupSuccess) {
        return (
            <View style={styles.containerStyle}>
                 <Image 
                    source={require('../../images/ic_success.png')}
                    style={{
                        height: 150,
                        resizeMode: 'contain',
                        alignSelf: 'center'
                    }}
                />

                 <Text style={[styles.textStyle, { textAlign: "center" }]}>Congratulations ! {'\n'} Your registration has been successful</Text> 
             </View> 
        );
    }
    return (
        <View style={styles.containerStyle}>
            <TeamXLoader loading={isLoading} />

            <TeamXLogoImage />

            <FlatList
                data={cardData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2} />
            <View style={{ marginBottom: 10 }}>
                <TeamXErrorText errorText={error} />
            </View>

            <TeamXButton onPress={handleNextpress} text="COMPLETE" />
        </View>
    );
}

export default UserTypeSelection;
