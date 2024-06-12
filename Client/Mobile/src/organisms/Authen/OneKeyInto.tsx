import { Image, StyleSheet, Text, View } from "react-native"
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
    {
        key: 's1',
        title: 'Upload your property',
        text: 'Simply wait for your party to collaborate',
        image: require('../../images/ic_upload_deal.png'),
        backgroundColor: "#606c7c"
    },
    {
        key: 's2',
        title: 'Telecollers takeover',
        text: 'Reach clients to sell your property and earn themsels from home',
        image: require('../../images/ic_telecoller.png' ),
        backgroundColor: "#48525e"
    },
    {
        key: 's3',
        title: 'Clients search properties',
        text: 'Finds their best property to reach telecolor',
        image: require('../../images/ic_search_deal.png' ),
        backgroundColor: "#6b757c"
    },
    {
        key: 's4',
        title: 'Best Deals',
        text: ' Best Deals on all our services',
        image: require('../../images/ic_best_deals.png' ),
        backgroundColor: "#48525e"
    },
    {
        key: 's5',
        title: 'Document verifications',
        text: 'Best lowyesr in the industry here to help you',
        image: require('../../images/ic_verify_doc.png' ),
        backgroundColor: "#383843"
    },
    {
        key: 's6',
        title: 'Properties at your fingertips',
        text: 'Simply browse ultimate properties from home',
        image: require('../../images/ic_happy_with_deal.png' ),
        backgroundColor: "#48525e"
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
    },
    titleStyle: {
        padding: 10,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    paragraphStyle: {
        padding: 20,
        textAlign: 'center',
        fontSize: 16,
    },
    introImageStyle: {
        width: 200,
        height: 200,
    },
    introTextStyle: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 30,
    },
    introTitleStyle: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginBottom: 16,
        fontWeight: 'bold',
    }
});
