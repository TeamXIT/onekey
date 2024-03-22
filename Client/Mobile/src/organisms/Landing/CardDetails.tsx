import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/styles';

const CardDetails = ({ route, navigation }) => {
  const { cardData } = route.params;

  const handleCommentPress = () => {
    navigation.navigate('comment');
  };

  return (
    <View style={styles.CardDetailscontainer}>
      <Image source={cardData.image} style={styles.CardDetailsimage} />
      <View style={styles.CardDetailsline}></View>
      <View style={styles.CardDetailsactionsContainer}>
        <Image source={require('../../images/ic_like.png')} style={[styles.CardDetailsicon, { tintColor: "#48525e" }]} />
        <TouchableOpacity onPress={handleCommentPress}>
          <Image source={require('../../images/ic_comment.png')} style={[styles.CardDetailsicon, { tintColor: "#48525e" }]} />
        </TouchableOpacity>
      </View>
      <Text style={styles.CardDetailslike}> Likes: {cardData.like}</Text>
      <Text style={styles.CardDetailstitle}>Title: {cardData.title}</Text>
      <Text style={styles.CardDetailsdescription}>Description: {cardData.description}</Text>
    </View>
  );
};

export default CardDetails;
