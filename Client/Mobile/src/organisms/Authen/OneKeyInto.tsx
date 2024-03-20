import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native"
import AppIntroSlider from "react-native-app-intro-slider";
import {  styles} from "../../styles/styles";



const slides = [
    {
        key: 's1',
        text: 'Best Recharge offers',
        title: 'Mobile Recharge',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
        },
        backgroundColor: styles.screenOnebgColor.color
    },
    {
        key: 's2',
        title: 'Flight Booking',
        text: 'Upto 25% off on Domestic Flights',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_flight_ticket_booking.png',
        },
        backgroundColor: styles.screenTwobgColor.color
    },
    {
        key: 's3',
        title: 'Great Offers',
        text: 'Enjoy Great offers on our all services',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png',
        },
        backgroundColor: styles.screenThreebgColor.color
    },
    {
        key: 's4',
        title: 'Best Deals',
        text: ' Best Deals on all our services',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_best_deals.png',
        },
        backgroundColor: styles.screenFourbgColor.color
    },
    {
        key: 's5',
        title: 'Bus Booking',
        text: 'Enjoy Travelling on Bus with flat 100% off',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_bus_ticket_booking.png',
        },
        backgroundColor: styles.screenFivebgColor.color
    },
    {
        key: 's6',
        title: 'Train Booking',
        text: ' 10% off on first Train booking',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_train_ticket_booking.png',
        },
        backgroundColor: styles.screenSixbgColor.color
    },
];

const OneKeyIntro = ({ navigation }) => {

    const onDone = () => {
        navigation.navigate("signin");
    };
    const onSkip = () => {
        navigation.navigate("signin");
    };

    const RenderItem = ({ item }) => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: item.backgroundColor,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    paddingBottom: 100,
                }}>
                <Text style={styles.introTitleStyle}>
                    {item.title}
                </Text>
                <Image
                    style={styles.introImageStyle}
                    source={item.image} />
                <Text style={styles.introTextStyle}>
                    {item.text}
                </Text>
            </View>
        );
    };

    return (
        <AppIntroSlider
            data={slides}
            renderItem={RenderItem}
            onDone={onDone}
            showSkipButton={true}
            onSkip={onSkip}
        />
    );
};

export default OneKeyIntro;





































