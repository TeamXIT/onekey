import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { styles,secondaryColor,errorColor } from "../styles/styles";

const TeamXCard = ({ onPress, imageSource, labelText, selected, setSelectedCard }) => {
  const [isSelected, setIsSelected] = useState(selected || false);

  useEffect(() => {
    setIsSelected(selected || false);
  }, [selected]);

  const handlePress = () => {
    if (!isSelected) {
      setIsSelected(true);
      onPress(labelText); 
      setSelectedCard(labelText); 
    }
    console.log(labelText)
  };

  return (
    <View style={{padding:20}}>
      <TouchableOpacity 
       style={[styles.UsercardStyle,
        isSelected ? {borderColor: errorColor,borderWidth:2} : {borderColor:secondaryColor,borderWidth:2}
      ]} 
        onPress={handlePress} 
        activeOpacity={0.5}
      >
        <Image source={imageSource} />
        <Text >{labelText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TeamXCard;
