import { StyleSheet, useColorScheme } from "react-native";

const componentColor = useColorScheme() === 'light' ? '#FAFAFA' : '#404040';
const transparent = "transparent";
const darkText = "#212121";
const lightText = '#FAFAFA';
const primaryColor = "#48525e";
const secondaryColor = "#F2E8C6";
const fieldColor = '#A63120';
const textColor = useColorScheme() === 'light' ? darkText : lightText;
const gray = "#808080";
const lightGray = "#D3D3D3";
const xSmallSize = 14;
const smallSize = 18;
const normalSize = 20;
const mediumSize = 24;
const largeSize = 30;

const styles = StyleSheet.create({
    appColor: {
        color: '#d9d0b2',
        opacity: 0.5
    },
    appBackground: {
        color: primaryColor
    },
    appTextColor: {
        color: textColor
    },
    appTransparent: {
        color: transparent
    },

    appInputBg: {
        color: fieldColor
    },
    appSwitchFalse: {
        color: lightGray
    },
    appSwitchTumbFalse: {
        color: gray
    },
    global: {
        backgroundColor: componentColor,
        color: textColor,
        alignItems: "center",
        tintColor: primaryColor,
        overlayColor: transparent,
    },
    image: {
        height: 150,
        width: 150,
        marginTop: 60,
        marginLeft: '30%',
        borderRadius: 80
    },
    text: {
        fontSize: normalSize,
        color: secondaryColor
    },
    header: {
        fontSize: largeSize,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 35,
        color: secondaryColor
    },
    BgContainer: {
        backgroundColor: primaryColor,
        height: '100%',
        padding: 15,
    },
    S_background: {
        backgroundColor: primaryColor,
        height: '100%',
        width: '100%'
    },
    US_container: {
        flex: 1,
        alignItems: "center",
        height: '100%',
        backgroundColor: primaryColor
    },
    US_cardsContainer1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '60%',
        width: '100%',
    },
    US_logoContainer: {
        position: 'absolute',
        top: -55,
        height: '100%',
        width: '100%'
    },
    cards: {
        width: '40%',
        height: 160,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 20

    },
    cardsContainer2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 50,
        width: '100%',
    },
    cardText: {
        color: primaryColor,
        fontSize: smallSize,
        fontWeight: 'bold',
    },
    cardIcon: {
        width: 40,
        height: 40,
        marginBottom: 10,
    },
    TextStyle: {
        color: primaryColor,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: normalSize,
        alignSelf: 'center',
    },
    arrowIcon: {
        width: 30,
        height: 18,
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
        marginRight: 100,
        marginLeft: 0,
        backgroundColor: secondaryColor,
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imagecontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        borderWidth: 1,
        borderColor: secondaryColor,
        borderRadius: 8,
        padding: 10,
    },
    textimage: {
        width: 30,
        height: 30,
        marginRight: 10,
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
    smallbuttonContainer: {
        flexDirection: 'row',
        padding: 90
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: primaryColor,
        alignContent: 'center',
        paddingLeft: 25,
        paddingRight: 25,
    },
    inputStyle: {
        flex: 1,
        height: 60,
        color: textColor,
        fontWeight: '200',
        paddingLeft: 20,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: secondaryColor,
        fontSize: normalSize,
    },
    otpcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    imageinputStyle: {
        height: 45,
        color: secondaryColor,
        fontWeight: '300',
        width: '90%',
        paddingLeft: 20,
        paddingRight: 15,
        borderRadius: 8,

        fontSize: normalSize,
    },
    SectionStyle: {
        flexDirection: 'column',
        width: '97%',
        marginBottom: 10,
        marginHorizontal: 10,
    },
    headerTextStyle: {
        color: secondaryColor,
        fontWeight: '500',
        fontSize: normalSize,
    },
    screenHeader: {
        fontSize: mediumSize,
        color: secondaryColor
    },
    logoimg: {
        width: '90%',
        height: 300,
        resizeMode: 'contain',
        marginBottom: -50,
        marginLeft: 25,
        margin: 30,
    },
    pressableTextStyle: {
        color: textColor,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: xSmallSize,
        alignSelf: 'center',
        padding: 10,
    },
    buttonStyle: {
        borderWidth: 2,
        color: '#FFFFFF',
        borderColor: secondaryColor,
        height: 60,
        width: '97%',
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
    s_r_view: {
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 50
    },
    s_r_view1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    s_f_view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    siup_outer_view: {
        backgroundColor: primaryColor,
        padding: 15,
        paddingLeft: 20,
        paddingRight: 20
    },
    bottom_text: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 100
    }
});
export { styles };