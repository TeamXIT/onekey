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
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: primaryColor,
        fontSize: 20,
    },
    SectionStyle: {
        flexDirection: 'row',
        height: 65,
        marginTop: 20,
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
export { styles,switchcolor1,switchcolor2, switchcolor3 };