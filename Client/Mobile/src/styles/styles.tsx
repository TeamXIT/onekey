import { StyleSheet, useColorScheme } from "react-native";

// Colors
const transparent = "transparent";
const darkText = "#212121";
const lightText = '#FAFAFA';
const primaryColor = "#48525e";
const secondaryColor = "#F2E8C6";
const tertiaryColor = "#d9d0b2";
const fieldColor = '#A63120';
const gray = "#808080";
const lightGray = "#D3D3D3";
const componentColor = useColorScheme() === 'light' ? '#FAFAFA' : '#404040';
const textColor = useColorScheme() === 'light' ? darkText : lightText;
const errorColor = "#FF0000";
const blue ="#0987F0";
// FontSizes
const xSmallSize = 14;
const smallSize = 18;
const normalSize = 20;
const mediumSize = 24;
const largeSize = 30;

const styles = StyleSheet.create({
    appPrimary: {
        color: primaryColor
    },
    appSecondary: {
        color: secondaryColor
    },
    appTertiary: {
        color: tertiaryColor,
    },
    appTextColor: {
        color: textColor
    },
    appTransparent: {
        color: transparent
    },
    appSwitchFalse: {
        color: lightGray
    },
    appSwitchTumbFalse: {
        color: gray
    },
    containerStyle: {
        flex: 1,
        alignItems: "center",
        backgroundColor: primaryColor,
        height: '100%',
        width: '100%',
        padding: 15,
        gap: 10
    },
    textStyle: {
        fontSize: normalSize,
        color: secondaryColor
    },
    //TODO: Update
    US_cardsContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    cardStyle: {
        width: '40%',
        height: 160,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 20,
        gap: 10
    },
    cardIcon: {
        width: 40,
        height: 40,
    },
    cardTextStyle: {
        color: primaryColor,
        fontSize: smallSize,
        fontWeight: 'bold',
    },
    enhancedCard: {
        backgroundColor: secondaryColor,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 5,
    },

    TextStyle: {
        color: primaryColor,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: normalSize,
        alignSelf: 'center',
    },
    //TODO: Update
    arrowIcon: {
        width: 30,
        height: 18,
    },
    //TODO: Update
    smallbuttonContainer: {
        flexDirection: 'row',
        paddingTop: 90,
        paddingBottom: 90
    },
    NexttouchableContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 100,
        borderRadius: 5,
        backgroundColor: secondaryColor,
        padding: 10
    },
    BacktouchableContent: {
        marginLeft: 0,
        backgroundColor: secondaryColor,
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imgTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: secondaryColor,
        borderRadius: 8,
        padding: 10,
        gap: 10
    },
    textimage: {
        width: 30,
        height: 30,
    },
    //TODO: Refactor component
    otpContainer: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: "center",
        gap: 10,
    },
    otpinput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        color: secondaryColor,
        marginHorizontal: 5,
        borderColor: secondaryColor,
        textAlign: 'center',
        fontSize: normalSize,
        borderRadius: 5,
    },
    imageInputStyle: {
        height: 45,
        color: secondaryColor,
        fontWeight: '300',
        width: '90%',
        paddingLeft: 20,
        paddingRight: 15,
        borderRadius: 8,
        fontSize: normalSize,
    },
    switchTextStyle: {
        color: secondaryColor,
        fontWeight: '500',
        fontSize: normalSize,
    },
    screenHeader: {
        fontSize: mediumSize,
        color: secondaryColor
    },
    logoImg: {
        width: '90%',
        height: 300,
        resizeMode: 'contain',
        marginBottom: -50,
        margin: 30,
    },
    buttonStyle: {
        borderWidth: 2,
        color: '#FFFFFF',
        borderColor: secondaryColor,
        height: 60,
        width: '100%',
        padding: 5,
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 25,
    },
    buttonTextStyle: {
        color: secondaryColor,
        paddingVertical: 10,
        fontSize: normalSize,
        fontWeight: 'bold'
    },
    stackHEdgeStyle: {
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10
    },
    errorTextStyle: {
        color: errorColor,
    },
    extedLinkContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
    },
    cardStyle: {
        backgroundColor: secondaryColor,
        marginBottom: 10,
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 10,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        height: 170
    },
    cardContent: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: -70,
    },
    cardimage: {
        marginBottom: 40,
        marginLeft: 10,

    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 110,
        right: 110,
    },
    icon: {
        marginRight: 30,
    },
    cardTitle: {
        fontSize: normalSize,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardDescription: {
        fontSize: smallSize,
        marginBottom: 4,
    },
    cardLikes: {
        fontSize: xSmallSize,
        color: blue
    },
    tabBar: {
        position: 'absolute',
        height: 75,
        bottom: 10,
        right: 16,
        left: 16,
        borderRadius: 16,
        backgroundColor: '#48525e',
        borderTopWidth: 1,

    },
    tabContainer: {
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 50
    },
    tabbtn: {
        width: 50,
        height: 50,
        borderWidth: 4,
        borderRadius: 25,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',

    },
    icon: {
        height: 40,
        width: 40,
        tintColor: secondaryColor,


    },
    text: {
        fontSize: 15,
        textAlign: 'center',
        color: secondaryColor,
        marginTop: 1,
        fontWeight: "bold"
    },
    circle: {

        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: primaryColor,

    },
});
export { styles };