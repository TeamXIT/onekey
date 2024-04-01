import React from 'react';
import { Text, View, Image } from 'react-native';

const Feedback = ({ route }) => {
  const { image, name, phoneNumber, rating } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Image source={image} style={{ width: 200, height: 200 }} />
      <Text style={{fontSize:20}} > Name:{name}</Text>
      <Text style={{fontSize:20}}> Contact no: {phoneNumber}</Text>
      <Text style={{fontSize:20}}> Rating:{rating}</Text>
      <Text>FEEDBACK</Text>
      <Text >Onekey BPO Solutions has been exceptional in handling our customer service inquiries. Their representatives are knowledgeable and courteous. Overall, a great experience working with them</Text>
    </View>
  );
};

export default Feedback;
