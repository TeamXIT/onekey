import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { styles } from "../styles/styles";

const TeamXCard = ({ onPress, imageSource, labelText }) => {
  return (
    <TouchableOpacity style={[styles.cards, styles.enhancedCard]} onPress={onPress} activeOpacity={0.5}>
      <Image source={imageSource} style={styles.cardIcon} />
      <Text style={styles.cardText}>{labelText}</Text>
    </TouchableOpacity>
  );
};

export default TeamXCard;