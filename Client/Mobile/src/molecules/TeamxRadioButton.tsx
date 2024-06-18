import React from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { styles } from '../../src/styles/styles'

const TeamxRadioButton = ({ value, label, selectedOption, secondaryColor, setSelectedOption }) => {
  return (
    <View style={styles.radioButtonRow}>
      <RadioButton
        value={value}
        color={'#39FF14'}
        uncheckedColor={'#39FF14'}
        status={selectedOption === value ? 'checked' : 'unchecked'}
        onPress={() => setSelectedOption(value)}
      />
      <Text style={styles.radioButtonLabel}>{label}</Text>
    </View>
  );
};

export default TeamxRadioButton;










