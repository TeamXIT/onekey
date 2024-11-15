import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/styles";
import TeamXImageTextInput from "../../atoms/TeamXImageTextInput";
import TeamXLogoImage from "../../atoms/TeamXLogoImage";
import TeamXHeaderText from "../../atoms/TeamXHeaderText";
import TeamXErrorText from "../../molecules/TeamXErrorText";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { setPassword } from "../../reducers/auth/authSlice";

const ForgotPassword = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const { isBusy, error } = useAppSelector(state => state.auth.screen);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmitPress = async () => {
    let hasError = false;
    if (!newPassword.trim() || !confirmPassword.trim()) {
      setPasswordError('Please fill in both fields.');
      hasError = true;
    } else if (newPassword !== confirmPassword) {
      setPasswordError('Passwords do not match.');
      hasError = true;
    } else {
      setPasswordError('');
    }

    if (!hasError) {
      setPasswordError('');
      await dispatch(setPassword(newPassword, confirmPassword));
      navigation.navigate('typeselection');
    }
  };

  return (
    <View style={[styles.containerStyle, styles.containerStyle]}>
      <TeamXLogoImage />
      <TeamXHeaderText value="CREATE PASSWORD" />
      <View style={styles.inputContainer}>
        <Text style={styles.textStyle}> New Password</Text>
        <TeamXImageTextInput
          value={newPassword}
          onChangeText={setNewPassword}
          image={require('../../images/ic_eye.png')}
          placeholder="Enter New Password"
          secureTextEntry={!showPassword}
          returnKeyType="next"
          onImagePress={togglePasswordVisibility}
        />
      </View>
      <View>
        <Text style={styles.textStyle}>Confirm New Password</Text>
        <TeamXImageTextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          image={require('../../images/ic_eye.png')}
          placeholder="Confirm New Password"
          secureTextEntry={!showPassword}
          returnKeyType="done"
          onImagePress={togglePasswordVisibility}
        />
        <TeamXErrorText errorText={passwordError} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButtonText}>CANCEL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSubmitPress}>
          <Text style={styles.saveButtonText}>SAVE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;
