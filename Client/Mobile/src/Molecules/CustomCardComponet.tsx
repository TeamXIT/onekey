import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { styles } from "../styles/styles";

const CustomCardComponent = ({ onPress, imageSource, labelText }) => {
  return (
    <TouchableOpacity style={[styles.cards, styles.enhancedCard]} onPress={onPress} activeOpacity={0.7}>
      <Image source={imageSource} style={styles.cardIcon} />
      <Text style={styles.cardText}>{labelText}</Text>
    </TouchableOpacity>
  );
};

export default CustomCardComponent;