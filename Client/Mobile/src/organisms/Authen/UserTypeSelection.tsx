//usertypeselection.tsx
import React from "react";
import { Image, Text, View, TouchableOpacity, Alert } from "react-native";
import { styles } from "../../styles/styles";
import CustomCardComponent from "../../Molecules/CustomCardComponet";
import { CardOptions } from "../../helpers/Models/CardOptions";

const UserTypeSelection = ({ navigation }) => {

    function handleCardPress(value: CardOptions): void {
        console.log("Selected option is: ", value);

        switch (value) {
            case CardOptions.BPO:
                break;
            case CardOptions.Agent:
               break;
            case CardOptions.Seller:
                break;
            case CardOptions.Lawyer:
              break;
            default:
                console.log("Unknown option selected");
                break;
        }
    }

    const handlenextpress = () => {
        navigation.navigate('Landing')
        console.log('next pressed!');
    };
    
    const handlebackpress = () => {
        navigation.goBack();

    };

    return (
        <View style={styles.US_container}>
            <View style={styles.US_logo}>
                <Image source={require('../../../asserts/Images/ic_user.png')} />
            </View>
            <View style={styles.US_cardsContainer1}>
                <CustomCardComponent
                    onPress={() => handleCardPress(CardOptions.BPO)}
                    imageSource={require('../../../asserts/Images/ic_bpo5.png')}
                    labelText="BPO"
                />
                <CustomCardComponent
                    onPress={() => handleCardPress(CardOptions.Agent)}
                    imageSource={require('../../../asserts/Images/ic_user.png')}
                    labelText="Agent"
                />
            </View>
            <View style={styles.cardsContainer2}>
                <CustomCardComponent
                    onPress={() => handleCardPress(CardOptions.Seller)}
                    imageSource={require('../../../asserts/Images/ic_seller.png')}
                    labelText="Seller"
                />
                <CustomCardComponent
                     onPress={() => handleCardPress(CardOptions.Lawyer)}
                    imageSource={require('../../../asserts/Images/ic_lawyer.png')}
                    labelText="Lawyer"
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handlebackpress}>
                    <View style={styles.BacktouchableContent}>
                        <Image source={require('../../../asserts/Images/ic_leftarrow.png')} style={styles.arrowIcon} />
                        <Text style={styles.BackTextStyle}>Back </Text>
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