import { StyleSheet, useColorScheme } from "react-native";

const componentColor = useColorScheme() === 'light' ? '#FAFAFA' : '#404040';
const transparent = "transparent";
const darkText = "#212121";
const lightText = '#FAFAFA';
const primaryColor = "#952323";
const secondaryColor = "#F2E8C6";
const fieldColor = '#A63120';
const textColor = useColorScheme() === 'light' ? darkText : lightText;
const gray="#808080";
const lightGray="#D3D3D3";
const smokeWhite="#FAFAFA";

const notmalSize= 20;
const mediumSize= 24;
const largeSize= 30;

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
    appSwitchFalse:{
        color:lightGray
    },
    appSwitchTumbFalse:{
        color:gray
    },
    global: {
        backgroundColor: componentColor,
        color: textColor,
        alignItems: "center",
        tintColor: primaryColor,
        overlayColor: transparent,
    },
    image:{
        height:150,
        width:150,
        marginTop:60,
        borderRadius:80
       },
       text:{
        fontSize:20,
      },
     button:{
        backgroundColor:'#952323',
        borderRadius:30,
        height:50,
        width:200,
        marginLeft:100,
        marginTop:30
      },
      input:{
        borderWidth:1,
        borderColor:'#952323',
        height:50,
        width:340,
        borderRadius:30,
        fontSize:20,
        marginLeft:30,
        marginTop:25,
        paddingLeft:10
       },
    buttonText:{
        color:'white',
        paddingLeft:60,
        paddingTop:10,
        fontSize:20 
    },
    V_image: {
        height: 150,
        width: 150,
        marginTop: 60,
        borderRadius:100
    },
    V_verifyTest: {
        fontSize: 30,
        marginLeft: 120,
        marginTop: 60,
        color: '#A73121'
    },
    V_input: {
        borderWidth: 1,
        borderColor: '#A73121',
        height: 50,
        width: 340,
        borderRadius: 30,
        fontSize: 25,
        marginLeft: 30,
        marginTop: 55,
        paddingLeft: 110,
     },
     V_button:{
        
        backgroundColor:'#A73121',
        borderRadius:30,
        height:50,
        width:200,
        marginLeft:100,
        marginTop:30
    },
    V_buttonText:{
        color:'white',
       paddingLeft:70,
        paddingTop:10,
        fontSize:20 
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
        height: 18,
    },
    NexttouchableContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft:100,
        borderWidth:2,
        borderRadius:5,
        borderColor:"#a73121",
        backgroundColor: '#952323',
        padding:10
    },
    BacktouchableContent:{
        marginRight: 100, 
        marginLeft: 0, 
        backgroundColor: '#F2E8C6',
        padding:10,
        borderWidth:2,
        borderRadius:5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        padding:120
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
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: secondaryColor,
        alignContent: 'center',
        paddingLeft: 25,
        paddingRight: 25,
    },
    inputStyle: {
        flex: 1,
        color: textColor,
        paddingLeft: 10,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: primaryColor,
        fontSize: 20,
    },
    SectionStyle: {
        flexDirection: 'row',
        width:'97%',
        height: 65,
        margin: 10,
    },
    headerTextStyle: {
        color: textColor,
        fontWeight: 'bold',
        fontSize: 15,
    },
    logoimg: {
        width: '70%',
        height: 160,
        resizeMode: 'contain',
        margin: 30,
    },
    pressableTextStyle: {
        color: textColor,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center',
        padding: 10,
    },
    buttonStyle: {
        backgroundColor: primaryColor,
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: primaryColor,
        height: 40,
        width: 180,
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 25,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
    s_r_view:{ 
        flexDirection: 'row',
        marginLeft: 10, 
        marginRight: 10 
    },
    s_r_view1:{ flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        alignItems: 'center' 
    },
    s_f_view:{ 
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'flex-end', 
        alignItems: 'center' 
    },
    error:{
        color:'red',
        marginLeft:30
    }
});
export { styles };