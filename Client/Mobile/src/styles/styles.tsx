import { StyleSheet, useColorScheme } from "react-native";

const componentColor = useColorScheme() === 'light' ? '#FAFAFA' : '#404040';
const transparent = "transparent";
const darkText = "#212121";
const lightText = '#FAFAFA';
const primaryColor = "#952323";
const secondaryColor = "#F2E8C6";
const fieldColor = '#A63120';
const textColor = useColorScheme() === 'light' ? darkText : lightText;
const switchcolor1='#767577';
const switchcolor2='#f4f3f4';
const switchcolor3="#3e3e3e";
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
        color:switchcolor1
    },
    appSwitchTumbFalse:{
        color:switchcolor2
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
    }
});
export { styles };