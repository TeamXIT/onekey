import { StyleSheet, useColorScheme } from 'react-native';
import { brown100, white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

// Colors
const transparent = 'transparent';
const darkText = '#212121';
const lightText = '#FAFAFA';
const primaryColor = '#272239';
const secondaryColor = '#35314A';//'#F2E8C6';
// const textinputColor='#35314A';
const whiteText = '#FFFFFF';
const tertiaryColor = '#d9d0b2';
const fieldColor = '#A63120';
const gray = '#808080';
const lightGray = '#D3D3D3';
const componentColor = useColorScheme() === 'light' ? '#FAFAFA' : '#404040';
const textColor = useColorScheme() === 'light' ? darkText : lightText;
const errorColor = '#FF0000';
const blue = '#0987F0';
const shadowcolor = '#000';
const plusIconContainerbg = 'rgba(0, 0, 0, 0.6)';

// FontSizes
const xSmallSize = 14;
const ySmallSize = 16;
const smallSize = 18;
const normalSize = 20;
const mediumSize = 24;
const largeSize = 30;

const styles = StyleSheet.create({
  appPrimary: {
    color: primaryColor,
  },
  appSecondary: {
    color: secondaryColor,
  },
  appTertiary: {
    color: whiteText,
  },
  appTextColor: {
    color: textColor,
  },
  appTransparent: {
    color: transparent,
  },
  appSwitchFalse: {
    color: lightGray,
  },
  appSwitchTumbFalse: {
    color: gray,
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primaryColor,
    padding: 15,
    gap: 15,
  },
  textStyle: {
    fontSize: normalSize,
    color: whiteText,
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
    gap: 5,

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
    borderRadius: 8,
    padding: 10,
    gap: 10,
    backgroundColor: secondaryColor
  },
  textimage: {
    width: 30,
    height: 30,
  },
  //TODO: Refactor component
  otpContainer: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  otpinput: {
    width: 40,
    height: 40,
    borderWidth: 1,
    color: whiteText,
    marginHorizontal: 5,
    borderColor: whiteText,
    textAlign: 'center',
    fontSize: normalSize,
    borderRadius: 5,
  },
  imageInputStyle: {
    height: 45,
    color: whiteText,
    fontWeight: '300',
    width: '90%',
    paddingLeft: 20,
    paddingRight: 15,
    borderRadius: 8,
    fontSize: normalSize,

  },
  switchTextStyle: {
    color: whiteText,
    fontWeight: '500',
    fontSize: normalSize,
  },
  screenHeader: {
    fontSize: mediumSize,
    color: whiteText,
  },
  logoImg: {
    width: '90%',
    height: 120,
    resizeMode: 'contain',
    marginLeft: 30,
    marginRight: 30,
  },
  buttonStyle: {
    width: 220,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonTextStyle: {
    color: whiteText,
    paddingVertical: 10,
    fontSize: normalSize,
    fontWeight: 'bold',
  },
  stackHEdgeStyle: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    gap: 70,
  },
  errorTextStyle: {
    color: errorColor,
  },
  extedLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  cardSelected: {
    borderColor: errorColor,
    borderWidth: 2,
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
    color: whiteText
  },
  cardDescription: {
    fontSize: xSmallSize,
    color: whiteText
  },
  cardContent: {
    flex: 2,
    flexDirection: 'column',
    marginLeft: 10,
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
    marginRight: 5,
    color: blue,
  },
  likeButton:{
    marginRight: 10,

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
    tintColor: whiteText,
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
    borderColor: whiteText,
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
    borderColor: whiteText,
    height: 'auto',
    width: 'auto',
    borderWidth: 0.1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  carddetailsTitle: {
    fontSize: normalSize,
    fontWeight: 'bold',
    marginBottom: 5,
    color: whiteText,
  },
  carddetailsDescription: {
    fontSize: smallSize,
    color: whiteText,
    marginBottom: 5,
  },
  Slidercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: primaryColor,
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
    fontSize: normalSize,
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
    color: 'white'
  },
  uploadDescriptionTextInput: {
    borderStyle: 'dashed',
    borderRadius: 10,
    height: 100,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
    fontSize: smallSize,
    borderWidth: 1,
    borderColor: '#9DBCD1',
    color: '#FFFFFF'

  },
  textDescriptionTextInput: {
    borderStyle: 'dashed',
    borderRadius: 10,
    height: 100,
    width: '100%',
    padding: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
    fontSize: 16,
    borderWidth: 1,

    borderColor: '#9DBCD1',
    color: '#FFFFFF'
  },
  UploadText: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
  },
  Uploadbutton: {
    backgroundColor: primaryColor,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    elevation: 10,
    borderColor: secondaryColor,
    borderWidth: 2,
  },
  LabelTextBoxContainer: {
    borderColor: whiteText,
    borderWidth: 2,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  labelText: {
    color: whiteText,
    fontSize: smallSize,
    marginBottom: 10,
  },
  radioButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonLabel: {
    color: whiteText,
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
    alignItems: 'center',
    elevation: 10,
    borderColor: secondaryColor,
    borderWidth: 2,
    width: 80,
    alignSelf: 'center',
  },
  AddButtonText: {
    color: secondaryColor,
    fontSize: ySmallSize,
  },
  displayedLabelContainer: {
    borderColor: whiteText,
    flexDirection: 'column',
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
    margin: 10,
  },
  uploadBtn: {
    backgroundColor: secondaryColor,
    padding: 10,
    width: '70%',
    borderRadius: 40,
    alignItems: 'center',
    elevation: 10,
    borderColor: secondaryColor,
    marginTop: 20,
    marginBottom: 15,
    marginLeft: '15%',

  },
  uploadButtonText: {
    color: primaryColor,
    fontSize: normalSize,
  },
  AddLabelText: {
    color: whiteText,
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
    margin: 10,
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
    color: whiteText,
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
    padding: 10
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
    margin: 3,
    color: whiteText
  },
  commitScreenAlignment: {
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
    tintColor: whiteText,
  },
  contactHeaderText: {
    color: whiteText,
    fontSize: 20,
    marginLeft: 10,
  },
  contactItem: {
    width: '90%',
    height: 80,
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: whiteText,
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
    color: whiteText,
    fontWeight: 'bold',
  },
  contactItemTextContainer: {
    padding: 10,
  },
  contactItemText: {
    color: whiteText,
  },
  contactItemSubText: {
    color: whiteText,
    marginTop: 4,
  },
  contactItemRight: {
    flexDirection: 'row',
    paddingRight: 15,
  },
  contactMessageIcon: {
    width: 24,
    height: 24,
    tintColor: whiteText,
    marginRight: 20,
  },
  contactCallIcon: {
    width: 20,
    height: 20,
    tintColor: whiteText,
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
    tintColor: whiteText,
  },
  addcontactTitle: {
    marginTop: 50,
    alignSelf: 'center',
    fontSize: normalSize,
    color: whiteText,
  },
  addcontactInput: {
    width: '90%',
    height: 50,

    borderRadius: 10,
    backgroundColor: secondaryColor,
    paddingLeft: 15,
    alignSelf: 'center',
    marginTop: 50,
    color: whiteText,
  },
  addcontactInputMarginTop: {
    marginTop: 20,
  },
  addcontactSaveButton: {
    height: 45,
    width: 200,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30
  },
  addcontactSaveButtonText: {
    color: whiteText,
  },
  acceptContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  acceptText: {
    height: 34,
    fontSize: 17,
    paddingTop: 4,
    color: 'white',
    backgroundColor: '#48525e',
    paddingLeft: 10,
    paddingRight: 10
  },
  acceptButton: {
    color: 'green',
    borderColor: 'green',
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 10,
    paddingRight: 10
  },
  documentBackground: {
    backgroundColor: primaryColor,
    height: '100%',
    width: '100%',
    position: 'absolute'
  },
  deatailHeading: {
    color: whiteText,
    fontSize: 35,
    textAlign: 'center',
    paddingTop: 20
  },
  detailText: {
    fontSize: 20,
    padding: 7,
    color: whiteText,
    paddingLeft: 10
  },
  starMaincontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer: {
    margin: 5,
  },
  goback: {
    paddingLeft: 10,
    paddingTop: 15
  },
  star: {
    fontSize: 20,
    color: 'white', // Set default color to white
  },
  selectedStar: {
    color: 'yellow',
  },
  productstar: {
    marginLeft: 230
  },
  productbpolawyer: {
    color: whiteText,
    fontSize: ySmallSize,
    bottom: 30
  },
  cardArrowIcon: {
    width: 20,
    height: 20,
    tintColor: whiteText,

  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between"
  },
  cardbpolawyerTitle: {
    fontSize: mediumSize,
    marginBottom: 5,
    color: whiteText,
  },
  //Teambottomsheet
  TeamxBottomSheetcontainer: {
    position: "absolute",
    flex: 1,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  TeamxBottomSheetbackdrop: {
    flex: 1
  },
  TeamxBottomSheetbottomsheet: {
    width: "100%",
    height: "40%",
    backgroundColor: primaryColor,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  TeamxBottomSheetheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  TeamxBottomSheetheaderText: {
    fontSize: smallSize,
    fontWeight: "bold",
    color: whiteText,
  },
  //signup
  forgotbuttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  cancelButton: {
    flex: 1,
    marginRight: 10,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
  },
  cancelButtonText: {
    textAlign: 'center',
    color: '#272239',
  },
  saveButton: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  saveButtonText: {
    textAlign: 'center',
    color: 'white',
  },
  forgotinputContainer: {
    marginTop: 10,
    marginBottom:20
  },
  forgotcontainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#272239',
  },
  forgottextStyle: {
    color: 'white',
    fontSize: xSmallSize,
  },
//verification
headerText: {
  color: "white",
  fontSize:normalSize,
},
subText: {
  color: "white",
  fontSize: xSmallSize,
  marginBottom: 10,
},
resendContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
},
resendText: {
  color: 'white',
  fontSize: xSmallSize,
},
resendButtonText: {
  color: 'white',
  fontSize: xSmallSize,
  fontWeight: 'bold',
  marginLeft: 5,
},
//signup
signuptitle: {
  color: 'white',
  fontSize:normalSize,
  
},
signupsubtitle: {
  color: 'white',
  fontSize: xSmallSize,
  marginBottom: 10,
},
signupinputContainer: {
  width: '100%',
  borderWidth: 1,
  borderColor: 'white',
  borderRadius: 10,
  padding: 5,
},
signupphoneContainer: {
  width: '100%',
},
signuptextContainer: {
  paddingVertical: 10,
  backgroundColor: 'white',
},
signuptextInput: {
  paddingVertical: 0,
  fontSize: xSmallSize,
},
signupcountryPickerButton: {
  paddingVertical: 0,
  color:"white"
},
countryPickerButton:{
 backgroundColor:primaryColor,

},
countryPickerArrow: {
  color: 'white', 
},
  countryCodeContainer:{
    width: '100%', 
    borderWidth: 1, 
    borderColor: '#000', 
    borderRadius: 10, 
    padding: 5,
    backgroundColor:secondaryColor,
    height:65
  },
  chatContainer: {
    flex: 1,
    backgroundColor: '#272239',
  },
  chatInputToolbar: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#272239',
    padding: 5,
  },
  chatInputPrimary: {
    alignItems: 'center',
  },
  chatComposer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
    color: 'white'
  },
  chatSendButton: {
    backgroundColor: '#ddd',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginRight: 20,
  },
  chatMessageContainer: {
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
  },
  chatMessageText: {
    fontSize: 16,
    color: '#fff',
  },
  historyView: {
    backgroundColor: secondaryColor,
    marginBottom: 5,
    marginTop: 10,
    borderRadius: 15,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    padding: 16,
    position: 'relative',
  },
 
    propertycontainer: {
        flex: 1,
        backgroundColor: '#272239',
        padding: 20,
    },
    propertytitle: {
        fontSize: 24,
        
        color: '#fff',
        marginBottom: 20,
    },
    propertyinput: {
        height: 60,
        paddingLeft:16,
        fontSize:20,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 16,
        color: '#fff',
        backgroundColor: '#35314A'
    },
    picker: {
        height: 60,

        paddingLeft:20,
        borderRadius: 10,
        marginBottom: 15,
        color: '#fff',
        backgroundColor: '#35314A'
    },
    pickerContainer: {
        width: '100%',
        borderRadius: 8,


        overflow: 'hidden', // Ensure content does not overfl
        marginBottom: 15,
        height: 60












    },
    pickerIcon: {
        position: 'absolute',
        right: 14,
        top: 19,
        width: 20,
        height: 20,
        tintColor: '#000',
    },
    propertybuttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    propertybutton: {
       height: 40, 
       width: 140, 
       borderRadius: 40,
       alignItems:'center'
       
       
       
       
       
       
    },
    propertybuttonText: {
        color: '#FFFFFF', 
        fontSize: 18,
        paddingTop:6
        
        
    },
});




export { styles, secondaryColor, errorColor };
