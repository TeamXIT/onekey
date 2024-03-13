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
    
});
export { styles };