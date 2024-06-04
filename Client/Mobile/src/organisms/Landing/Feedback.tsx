import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from '../../styles/styles';

const Feedback = ({ route }) => {
  const { image, name, phoneNumber, rating } = route.params;

  return (
    <View style={{ flex: 1,backgroundColor:'#272239' }}>
      <Image source={image} style={{ width: 150, height: 150,borderRadius:75,alignSelf:'center',justifyContent:'center' }} />
      <Text style={{fontSize:20,color:styles.appTertiary.color,paddingLeft:20,paddingBottom:5}} >Name    : {name}</Text>
      <Text style={{fontSize:20,color:styles.appTertiary.color,paddingLeft:20,paddingBottom:5}}>Contact : {phoneNumber}</Text>
      <Text style={{fontSize:20,color:styles.appTertiary.color,paddingLeft:20,paddingBottom:10}}>Rating    : {rating}</Text>
      <Text style={{fontSize:20,color:styles.appTertiary.color,paddingLeft:20,paddingBottom:5}}>FEEDBACK</Text>
      <Text style={{fontSize:16,color:styles.appTertiary.color,paddingLeft:20,paddingRight:20}}>Onekey BPO Solutions has been exceptional in handling our customer service inquiries. Their representatives are knowledgeable and courteous. Overall, a great experience working with them</Text>
    </View>
  );
};

export default Feedback;
