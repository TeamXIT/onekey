import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { styles } from '../styles/styles';


const TeamXStarRating = ({ totalStars }) => {
  const [ratedStars, setRatedStars] = useState(0);

  const handleStarPress = (index) => {
    setRatedStars(index + 1);
  };

  return (
    <View style={styles.starMaincontainer}>
      {[...Array(totalStars).keys()].map((index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleStarPress(index)}
          style={styles.starContainer}
        >
          <Text style={[styles.star, index < ratedStars ? styles.selectedStar : null]}>★</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};



export default TeamXStarRating;
