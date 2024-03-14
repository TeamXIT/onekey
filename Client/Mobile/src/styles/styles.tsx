import { StyleSheet, useColorScheme } from "react-native";

const componentColor = useColorScheme() === 'light' ? '#FAFAFA' : '#404040';
const transparent = "transparent";
const darkText = "#212121";
const lightText = '#FAFAFA';
const primaryColor = "#952323";
const secondaryColor = "#A63120";
const fieldColor = '#A63120';
const textColor = useColorScheme() === 'light' ? darkText : lightText;

const styles = StyleSheet.create({
    appColor: {
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
    global: {
        backgroundColor: componentColor,
        color: textColor,
        alignItems: "center",
        tintColor: primaryColor,
        overlayColor: transparent,
    },
    S_background:{
        backgroundColor:secondaryColor,
        height:'100%',
        width:'100%'
    },
    
    US_container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#F2E8C6'
    },
    US_logo: {
        marginTop: '10%',
        marginBottom: -70,
        alignItems: 'center',

    },

    US_cardsContainer1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 150,
        width: '100%',
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
        color: '#F2E8C6',
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardIcon: {
        width: 40,
        height: 40,
        marginBottom: 10,

    },
    BackTextStyle: {
        color: '#a73121',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
        

    },
    TextStyle: {
        color: '#F2E8C6',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        

    },

    arrowIcon: {
        width: 30,
        height: 25,


    },

    touchableContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft:100,
        borderWidth:2,
        borderRadius:5,
        borderColor:"#a73121",
        backgroundColor: '#952323',
        padding:10

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        padding:120// Optional: Adjust the spacing between buttons
    },
    enhancedCard: {
        backgroundColor: '#952323',
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
    
    
});
export { styles };