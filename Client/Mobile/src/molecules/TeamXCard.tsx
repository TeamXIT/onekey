import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { styles } from "../styles/styles";

const TeamXCard = ({ onPress, imageSource, labelText, selected }) => {
  const [isSelected, setIsSelected] = useState(selected || false);

  useEffect(() => {
    setIsSelected(selected || false);
  }, [selected]);

  const handlePress = () => {
    
    if (!isSelected) {
      setIsSelected(true);
      console.log(labelText); 
      onPress(labelText); 
    } else { 
      setIsSelected(false);
      
      setIsSelected(true);
      console.log(labelText); 
      onPress(labelText); 
    }
  };

  return (
    <TouchableOpacity 
      style={[
        styles.cardStyle,
        styles.enhancedCard,
        isSelected ? styles.cardSelected : null,
      ]} 
      onPress={handlePress} 
      activeOpacity={0.5}
    >
      <View style={{ flexDirection: 'column',gap:10}}>
      <Image source={imageSource} style={styles.cardIcon} />
      <Text style={styles.cardTextStyle}>{labelText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TeamXCard;
