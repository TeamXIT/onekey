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
        marginLeft: '30%',
        marginRight: 150,
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
   }
    
})
export { styles };