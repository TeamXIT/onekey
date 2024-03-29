import { Alert, Text, View } from "react-native"
import { styles } from "../../styles/styles";
import { useEffect, useState, } from "react";
import TeamXButton from "../../atoms/TeamXButton";
import TeamXImageTextInput from "../../atoms/TeamXImageTextInput";
import TeamXLogoImage from "../../atoms/TeamXLogoImage";
import TeamXHeaderText from "../../atoms/TeamXHeaderText";
import TeamXTextedLink from "../../molecules/TeamXTextedLink";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import TeamXErrorText from "../../molecules/TeamXErrorText";
import { UserSignin } from "../../reducers/auth/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";

const ForgotPassword = ({ navigation }) => {
   const dispatch = useAppDispatch()
   const authen = useAppSelector(state => state.auth);

   const [username, setUsername] = useState('');


   const [usernameError, setUsernameError] = useState('');

   const [signinError, setSigninError] = useState('');

   const handleSubmitPress = () => {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
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
         setSigninError('');


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
            handleOnPress={() => navigation.navigate('signin')} />
      </View>

   );
}

export default ForgotPassword;



