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
const plusIconContainerbg = 'rgba(0, 0, 0, 0.6)'

// FontSizes
const xSmallSize = 14;
const ySmallSize = 16
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: primaryColor,
        padding: 15,
        gap: 15
    },
    textStyle: {
        fontSize: normalSize,
        color: secondaryColor,


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
        height: 120,
        resizeMode: 'contain',
        marginLeft: 30,
        marginRight: 30
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
        marginBottom: 10,
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
    cardContainer: {
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
    },
    cardDescription: {
        fontSize: xSmallSize,

    },
    cardContent: {
        flex: 2,
        flexDirection: 'column',
        marginLeft: 20,
    },
    cardimage: {
        padding: 80,
        marginBottom: 40,
        marginLeft: 5,
        marginTop: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    cardLikes: {
        fontSize: xSmallSize,
        marginRight: 10,
        color: blue,
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
        marginBottom: 10,
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
        borderWidth: 1,
        borderColor: secondaryColor,
        borderRadius: 10,
    },
    plusIconContainer: {
        position: 'absolute',
        bottom: 0,
        right: 10,
        backgroundColor: plusIconContainerbg,
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
        margin: 5,
        borderColor:'white',
        height:'auto',
        width:'auto',
        borderWidth:0.2,
        borderRadius:5,
        paddingLeft:10,
        paddingRight:10
    },
    carddetailsTitle: {
        fontSize: normalSize,
        fontWeight: 'bold',
        marginBottom: 5,
        color: secondaryColor,
    },
    carddetailsDescription: {
        fontSize: smallSize,
        color: secondaryColor,
        marginBottom: 5,
    },
    Slidercontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: primaryColor

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
        tintColor: secondaryColor,
    },
    //homes&post&settings
    HomeContainer: {
        flex: 1,
        backgroundColor: primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    HomeText: {
        color: secondaryColor,
        fontSize: normalSize
    },
    //upload
    UploadContainer: {
        flex: 1,
        backgroundColor: primaryColor,
    },
    uploadTitleTextInput: {
        backgroundColor: secondaryColor,
        borderRadius: 10,
        height: 50,
        paddingHorizontal: 10,
        marginBottom: 20,
        fontSize: smallSize,
    },
    uploadDescriptionTextInput: {
        backgroundColor: secondaryColor,
        borderRadius: 10,
        height: 100,
        paddingHorizontal: 10,
        marginBottom: 20,
        textAlignVertical: "top",
        fontSize: smallSize,
    },
    UploadText: {
        color: secondaryColor,
        fontSize: 20,
        marginBottom: 10,
    },
    Uploadbutton: {
        backgroundColor: primaryColor,
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        elevation: 10,
        borderColor: secondaryColor,
        borderWidth: 2,
    },
    LabelTextBoxContainer: {
        borderColor: secondaryColor,
        borderWidth: 2,
        padding: 10,
        marginTop: 10,
        borderRadius: 10
    },
    labelText: {
        color: secondaryColor,
        fontSize: smallSize,
        marginBottom: 10,
    },
    radioButtonRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioButtonLabel: {
        color: secondaryColor,
        fontSize: ySmallSize,
        marginRight: 30,
    },
    radioButtonsContainer: {
        marginBottom: 10,
        flexDirection: 'row',
    },
    AddButton: {
        backgroundColor: primaryColor,
        padding: 5,
        borderRadius: 5,
        alignItems: "center",
        elevation: 10,
        borderColor: secondaryColor,
        borderWidth: 2,
        width: 80,
        alignSelf: 'center'
    },
    AddButtonText: {
        color: secondaryColor,
        fontSize: ySmallSize,
    },
    displayedLabelContainer: {
        borderColor: secondaryColor,
        flexDirection: 'row',
        borderWidth: 2,
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
    },
    deleteIcon: {
        position: 'absolute',
        top: -3,
        right: -3,
    },
    uploadedImage: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        marginRight: 10,
    },
    scrollView: {
        marginVertical: 20,
    },
    imageSelectionContainer: {
        flexDirection: 'row',
        padding: 10,
        marginVertical: 10,
    },
    fileButton: {
        flex: 1,
        alignItems: 'flex-start',
        position: 'relative',
        right: 5,
        marginLeft: 30,
        margin: 10

    },
    uploadBtn: {

        backgroundColor: secondaryColor,
        padding: 10,
        width: '70%',
        borderRadius: 10,
        alignItems: "center",
        elevation: 10,
        borderColor: secondaryColor,
        marginTop: 20,
        marginBottom: 15,
        marginLeft: "15%"


    },
    uploadButtonText: {
        color: primaryColor,
        fontSize: normalSize,
    },
    AddLabelText: {
        color: secondaryColor,
        fontSize: normalSize,
    },

    //TeamxImageComponent
    uploadImagecontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        flexWrap: 'wrap',


    },
    imageContainer: {
        position: 'relative',
        margin: 10

    },
    imagePreview: {
        width: 80,
        height: 80,
        borderRadius: 8,

    },
    deleteButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteButtonText: {
        tintColor: "white",

    },
    uploadrow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    uploadButtonStyle: {
        backgroundColor: plusIconContainerbg,
        borderRadius: 10,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    uploadTitleText: {
        color: secondaryColor,
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: normalSize
    },
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040',
    },
    activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    activityIndicator: {
        alignItems: 'center',
        height: 80,
      },
      commentCard: {
        height: 150,
        width: 350,
        backgroundColor: secondaryColor,
        borderRadius: 10,
        flexDirection: 'row',
        margin: 15,
        padding:10
      },
      commentImage: {
        height: 100,
        width: 100,
        borderRadius: 50,
        top: 15
      },
      commentInformation: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 3
      },
      commitScreenAlignment:{
        backgroundColor: primaryColor, 
        alignItems: 'center'
      },
      //settings
      SettingmainContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 30,
        backgroundColor: primaryColor,
    },
    SettingcontactButton: {
        backgroundColor: primaryColor,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: secondaryColor,
        width: "90%",
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    SettingcontactButtonText: {
        color: secondaryColor,
        fontSize: ySmallSize,
    },
    //contact screen
    contactContainer: {
        flex: 1,
        backgroundColor: primaryColor,
      },
      contactHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
      },
      contactBackIcon: {
        width: 24,
        height: 24,
        tintColor: secondaryColor,
      },
      contactHeaderText: {
        color: secondaryColor,
        fontSize: 20,
        marginLeft: 10,
      },
      contactItem: {
        width: '90%',
        height: 80,
        alignSelf: 'center',
        borderWidth: 0.5,
        borderColor: secondaryColor,
        borderRadius: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      contactItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      contactInitialCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: secondaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
      },
      contactInitialText: {
        color: primaryColor,
        fontWeight: 'bold',
      },
      contactItemTextContainer: {
        padding: 10,
      },
      contactItemText: {
        color: secondaryColor,
      },
      contactItemSubText: {
        color: secondaryColor,
        marginTop: 4,
      },
      contactItemRight: {
        flexDirection: 'row',
        paddingRight: 15,
      },
      contactMessageIcon: {
        width: 24,
        height: 24,
        tintColor: secondaryColor,
        marginRight: 20,
      },
      contactCallIcon: {
        width: 20,
        height: 20,
        tintColor: secondaryColor,
      },
      contactRightAction: {
        backgroundColor: errorColor,
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 70,
        marginTop: 15,
      },
      contactRightActionText: {
        color: secondaryColor,
        paddingHorizontal: 10,
      },
      contactAddButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: primaryColor,
        position: 'absolute',
        right: 30,
        bottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
      },
      contactAddIcon: {
        width: 50,
        height: 70,
      },
      //AddContactScreen
      addContactcontainer: {
        flex: 1,
        backgroundColor: primaryColor,
      },
      addcontactheader: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
      },
      addcontactBackIcon: {
        width: 24,
        height: 24,
        tintColor: secondaryColor,
      },
      addcontactTitle: {
        marginTop: 50,
        alignSelf: 'center',
        fontSize: normalSize,
        color: secondaryColor,
      },
      addcontactInput: {
        width: '90%',
        height: 50,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: secondaryColor,
        paddingLeft: 15,
        alignSelf: 'center',
        marginTop: 50,
        color: secondaryColor,
      },
      addcontactInputMarginTop: {
        marginTop: 20,
      },
      addcontactSaveButton: {
        backgroundColor: secondaryColor,
        borderRadius: 10,
        height: 50,
        width: '90%',
        marginTop: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      },
      addcontactSaveButtonText: {
        color: primaryColor,
      },
      acceptContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      acceptText: {
        height:34,
        fontSize:17,
        paddingTop:4,
        color: 'white',
        backgroundColor:'#48525e',
        paddingLeft:10,
        paddingRight:10
      },
      acceptButton:{
         color:'green',
         borderColor:'green',
         fontSize:20,
         borderWidth:1,
         borderRadius:15,
         paddingLeft:10,
         paddingRight:10
      },
      documentBackground: {
        backgroundColor:primaryColor,
        height:'100%',
        width:'100%',
       position:'absolute'
      },
      deatailHeading:{
        color:'#F2E8C6',
        fontSize:35,
        textAlign:'center',
        paddingTop:20
      },
      detailText:{
        fontSize:15,
        padding:7,
        color:'#F2E8C6'
      },
      starMaincontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      starContainer: {
        margin: 5,
      },
      star: {
        fontSize: 32,
        color: 'white', // Set default color to white
      },
      selectedStar: {
        color: 'yellow',
      },
      productstar:{
        marginLeft: 130
      },
      productbpolawyer:{
        flexDirection: 'row', 
        alignItems: 'center'
      }
});


export { styles, secondaryColor, errorColor };