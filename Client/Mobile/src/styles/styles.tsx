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
const blue = "#0987F0";

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
        width: 130,
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
        paddingBottom: 90,
        gap: -38
    },
    NexttouchableContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 100,
        borderRadius: 5,
        backgroundColor: secondaryColor,

        paddingLeft: 38,
        paddingRight: 38,
        paddingTop: 10,
        paddingBottom: 10
    },
    BacktouchableContent: {
        marginLeft: 0,
        backgroundColor: secondaryColor,

        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 38,
        paddingRight: 38,
        paddingTop: 10,
        paddingBottom: 10
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
        marginRight: 10,
        gap: 70
    },
    errorTextStyle: {
        color: errorColor,
    },
    extedLinkContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
    },
    cardSelected: {
        borderColor: errorColor,
        borderWidth: 2
    },
    //project screen
    cardcontainer: {
        paddingBottom: 100,
    },
    cardStyle: {
        backgroundColor: secondaryColor,
        marginBottom: 5,
        marginTop: 10,
        borderRadius: 20,
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center',
        height: 150,
        padding: 16,
        position: 'relative',
    },
    cardimage: {
        width: 150,
        height: 150,
        borderRadius: 10,
        marginRight: 20,
    },
    cardContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    cardTitle: {

        fontSize: 18,
        fontWeight: 'bold',

    },
    cardDescription: {
        marginTop: 10,
        fontSize: 16,
    },
    cardlikes: {
        fontSize: 15,
        color: blue,
        marginTop: 50,
        marginLeft: 50
    },

    buttonContainer: {
        position: 'absolute',
        top: 110,
        left: 250,
        flexDirection: 'row',

    },
    commentIcon: {

        marginLeft: 10,
    },
    LikeIcon: {
        marginRight: 65,
    },
    //bottom tab
    tabBar: {
        position: 'absolute',
        height: 65,
        bottom: 10,
        right: 16,
        left: 16,
        borderRadius: 16,
        backgroundColor: primaryColor,
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
    tabicon: {
        tintColor: secondaryColor,
    },
    text: {
        fontSize: 10,
        textAlign: 'center',
        color: secondaryColor,
    },
    circle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: primaryColor,
    },
});

export { styles };