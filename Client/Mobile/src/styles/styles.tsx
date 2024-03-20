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
const into1BgColor = "#20d2bb";
const into2BgColor = "#febe29";
const into3BgColor = "#22bcb5";
const into4BgColor = "#3395ff";
const into5BgColor = "#f6437b";
const into6BgColor ="#febe29";
// FontSizes
const xSmallSize = 14;
const smallSize = 18;
const normalSize = 20;
const mediumSize = 24;
const largeSize = 30;

const styles = StyleSheet.create({
    screenOnebgColor:{
        color:into1BgColor
    },
    screenTwobgColor:{
        color:into2BgColor
    },
    
    screenThreebgColor:{
        color:into3BgColor
    },
    
    screenFourbgColor:{
        color:into4BgColor
    },
    
    screenFivebgColor:{
        color:into5BgColor
    },
    
    screenSixbgColor:{
        color:into6BgColor
    },
        

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
        width:130,
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
        gap:-48
    },
    NexttouchableContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 100,
        borderRadius: 5,
        backgroundColor: secondaryColor,
       
        paddingLeft:38,
        paddingRight:38,
        paddingTop:10,
        paddingBottom:10
    },
    BacktouchableContent: {
        marginLeft: 0,
        backgroundColor: secondaryColor,
        
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft:38,
        paddingRight:38,
        paddingTop:10,
        paddingBottom:10
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
        gap:70
    },
    errorTextStyle: {
        color: errorColor,
    },
    extedLinkContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
    },
    cardSelected:{
        borderColor: errorColor,
        borderWidth: 2
    },
    cardStyle: {
        backgroundColor: secondaryColor,
        borderRadius: 10,
        elevation: 5,
        flexDirection: 'row',
        paddingTop:25,
        justifyContent:'center',
        height: 150,
        width:180
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
    },
});

export { styles };