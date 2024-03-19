import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CardDetails = ({ route }) => {
  const { cardData } = route.params;

  return (
    <View >
      <Image source={cardData.image}  />
      <Text >Title: {cardData.title}</Text>
      <Text >Description: {cardData.description}</Text>
    </View>
  );
};



export default CardDetails;
