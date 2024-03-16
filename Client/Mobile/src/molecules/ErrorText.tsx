import React from 'react';
import { Text } from 'react-native';
import { styles } from '../styles/styles';

const ErrorText = ({ errorText }) => {
  return (
    <>
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </>
  );
};

export default ErrorText;
