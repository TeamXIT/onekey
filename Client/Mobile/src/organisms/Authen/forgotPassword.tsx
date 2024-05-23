import { View } from "react-native"
import { styles } from "../../styles/styles";
import { useState, } from "react";
import TeamXButton from "../../atoms/TeamXbutton";
import TeamXImageTextInput from "../../atoms/TeamXImageTextInput";
import TeamXLogoImage from "../../atoms/TeamXLogoImage";
import TeamXHeaderText from "../../atoms/TeamXHeaderText";
import TeamXTextedLink from "../../molecules/TeamXTextedLink";
import TeamXErrorText from "../../molecules/TeamXErrorText";

const ForgotPassword = ({ navigation }) => {
   const [username, setUsername] = useState('');
   const [usernameError, setUsernameError] = useState('');

   const handleSubmitPress = () => {
      let hasError = false;
      if (!username.trim()) {
         setUsernameError('Please provide username.');
         hasError = true;
      } else if (username.trim().length < 4) {
         setUsernameError('Username must be at least 4 characters.');
         hasError = true;
      } else {
         setUsernameError('');
      }
      if (!hasError) {
         setUsernameError('');
         //TODO: Forgot password logic goes here....
      }
   }

   return (
      <View style={styles.containerStyle}>
         <TeamXLogoImage />
         <TeamXHeaderText value="FORGOT  PASSWORD" />
         <View style={{ marginTop: 30 }}>
            <TeamXImageTextInput
               value={username}
               onChangeText={setUsername}
               image={require('../../images/ic_user.png')}
               placeholder="Enter Username"
               keyboardType="email-address"
               returnKeyType="next"
            />
            <TeamXErrorText errorText={usernameError} />
         </View>
         <TeamXButton onPress={handleSubmitPress} text="SUBMIT" />
         <TeamXTextedLink
            value={"Already  have an account?  "}
            linkValue={"SIGNIN"}
            handleOnPress={() => navigation.replace('signin')} />
      </View>
   );
}

export default ForgotPassword;
