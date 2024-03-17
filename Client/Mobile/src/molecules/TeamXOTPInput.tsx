import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput } from 'react-native';
import { styles } from '../styles/styles';

const TeamXOTPInput = ({ numberOfDigits, onOTPChange }) => {
  const [otp, setOTP] = useState(Array(numberOfDigits).fill(''));
  const inputRefs = useRef([]);

  useEffect(() => {
    setTimeout(()=> {
      inputRefs.current[0].focus();
    }, 500);
  }, [])

  const handleChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
    const otpValue = newOTP.join('');
    onOTPChange(otpValue);
  };

  const handleKeyPress = (index, key) => {
    if (key === 'Backspace') {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    } else if (index < (numberOfDigits - 1)) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <View style={styles.otpContainer}>
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
