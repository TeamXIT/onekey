import React, { useState, useRef } from 'react';
import { View, TextInput } from 'react-native';
import { styles } from '../styles/styles';

const TeamXOTPInput = ({ numberOfDigits = 6, onOTPChange }) => {
  const [otp, setOTP] = useState(Array(numberOfDigits).fill(''));
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
    const otpValue = newOTP.join('');
    onOTPChange(otpValue);
  };

  const handleKeyPress = (index, key) => {
    if (key === 'Backspace' && index > 0 && !otp[index]) {
      inputRefs.current[index - 1].focus();
    } else if (index < numberOfDigits - 1 && otp[index]) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <View style={styles.otpcontainer}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          style={styles.otpinput}
          keyboardType="numeric"
          maxLength={1}
          value={digit}
          onChangeText={text => handleChange(index, text)}
          onKeyPress={({ nativeEvent: { key } }) =>
            handleKeyPress(index, key)
          }
          ref={ref => (inputRefs.current[index] = ref)}
        />
      ))}
    </View>
  );
};

export default TeamXOTPInput;
