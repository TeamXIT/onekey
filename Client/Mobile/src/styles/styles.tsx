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
const shadowcolor = '#000'

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
    UsercardStyle: {
        height: 140,
        width: 140,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: secondaryColor,
        borderRadius: 10,
        shadowColor: shadowcolor,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 5,
        gap: 5
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
        gap: -58
    },
    NexttouchableContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 100,
        borderRadius: 10,
        backgroundColor: secondaryColor,

        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 10,
        paddingBottom: 10
    },
    BacktouchableContent: {
        marginLeft: 0,
        backgroundColor: secondaryColor,

        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 40,
        paddingRight: 40,
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
    cardContainer:{
        backgroundColor: primaryColor,
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
    cardTitle: {
        fontSize: smallSize,
        fontWeight: 'bold',
        marginTop: 20,
    },
    cardDescription: {
        fontSize: xSmallSize,
    },
    cardLikes: {
        marginTop: 20,
        fontSize: xSmallSize,
        color: blue,
        marginLeft: 20
    },
    cardContent: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 15,
    },
    cardimage: {
        padding: 80,
        marginBottom: 40,
        marginLeft: 5,
        marginTop: 20,
    },
    buttonContainer: {
        position: 'absolute',
        top: 110,
        left: 250,
        flexDirection: 'row',
    },
    commentIcon: {
        marginLeft: 40,
    },
    LikeIcon: {
        marginLeft: 25,
    },
    //carddetails
    CardDetailscontainer: {
        flex: 1,
        backgroundColor: primaryColor,
      },
      iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom:10,
      },
      carddeatilsIcon: {
        tintColor: secondaryColor,
      },
      CardDetailsmainImage: {
        width: '100%',
        height: 310,
        backgroundColor: secondaryColor,
        borderWidth: 2,
        borderRadius: 10,
      },
      thumbnailsContainer: {
        flexDirection: 'row',
        padding: 10,
      },
      thumbnailImage: {
        width: 70,
        height: 70,
        marginRight: 10,
        borderWidth: 4,
        borderColor: secondaryColor,
        borderRadius: 10,
      },
      plusIconContainer: {
        position: 'absolute',
        bottom: 0,
        right: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 10,
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
      },
      plusIcon: {
        color: secondaryColor,
        fontSize: normalSize,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    titleDescriptionContainer: {
        flex: 5,
        paddingHorizontal: 5,  
      },
      carddetailsTitle: {
        fontSize: normalSize,
        fontWeight: 'bold',
        marginBottom: 5,
        color: secondaryColor,
      },
      carddetailsDescription: {
        fontSize: xSmallSize,
        color: secondaryColor,
      },
    Slidercontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex:1,
        backgroundColor:primaryColor
       
      },
      Sliderimage: {
        width: 250,
        height: 250,
        
      },
      Sliderarrow: {
        padding: 5,
      },
      SliderarrowIcon: {
        width: 50,
        height: 50,
      },
      //homes&post&settings
      HomeContainer: {
        flex: 1, 
        backgroundColor: primaryColor, 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    HomeText:{
        color:secondaryColor,
        fontSize:normalSize
    }
});

export { styles, secondaryColor, errorColor };