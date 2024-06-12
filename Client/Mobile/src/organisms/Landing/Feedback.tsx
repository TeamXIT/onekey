import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from '../../styles/styles';

const Feedback = ({ route }) => {
  const { image, name, phoneNumber, rating } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center',backgroundColor:'#272239' }}>
      <Image source={image} style={{ width: 200, height: 200 }} />
      <Text style={{fontSize:20,color:styles.appTertiary.color}} > Name:{name}</Text>
      <Text style={{fontSize:20,color:styles.appTertiary.color}}> Contact no: {phoneNumber}</Text>
      <Text style={{fontSize:20,color:styles.appTertiary.color,}}> Rating:{rating}</Text>
      <Text style={{fontSize:20,color:styles.appTertiary.color,}}>FEEDBACK</Text>
      <Text style={{fontSize:14,color:styles.appTertiary.color,}}>Onekey BPO Solutions has been exceptional in handling our customer service inquiries. Their representatives are knowledgeable and courteous. Overall, a great experience working with them</Text>
    </View>
  );
};

export default Feedback;
