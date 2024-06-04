import React from 'react';
import { Text, Image, FlatList, View, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/styles'

const commentsData = [
  { id: 1, name: 'BPO1', phoneNumber: '9432654432', date: '31-03-2024 15:43', rating: 3.5, image: require('../../images/ic_bpo5.png') },
  { id: 2, name: 'BPO2', phoneNumber: '9876543210', date: '02-04-2024 09:33', rating: 4.1, image: require('../../images/ic_bpo5.png') },
  { id: 3, name: 'BPO3', phoneNumber: '9876543210', date: '03-05-2024 10:44', rating: 3.3, image: require('../../images/ic_bpo5.png') },
  { id: 4, name: 'BPO4', phoneNumber: '9876543210', date: '04-06-2024 11:55', rating: 3.5, image: require('../../images/ic_bpo5.png') },
  { id: 5, name: 'BPO5', phoneNumber: '9876543210', date: '05-07-2024 12:22', rating: 3.8, image: require('../../images/ic_bpo5.png') },
  { id: 6, name: 'BPO6', phoneNumber: '9876543210', date: '06-08-2024 13:11', rating: 4.2, image: require('../../images/ic_bpo5.png') },
  { id: 7, name: 'BPO7', phoneNumber: '9876543210', date: '07-09-2024 14:00', rating: 4.5, image: require('../../images/ic_bpo5.png') },
  // Add more comment objects as needed
];

const CommentItem = ({ item, navigation }) => {
  const handleCardPress = () => {
    navigation.navigate('Feedback', {
      image: item.image,
      name: item.name,
      phoneNumber: item.phoneNumber,
      rating: item.rating
    });
  };

  return (
    <TouchableOpacity style={styles.commentCard} onPress={handleCardPress}>
      <Image source={item.image} style={styles.commentImage} />
      <View style={{ margin: 10 }}>
        <Text style={styles.commentInformation}>{item.name}</Text>
        <Text style={styles.commentInformation}>{item.phoneNumber}  <Image source={require('../../images/ic_telephone.png')} /></Text>
        <Text style={styles.commentInformation}>{item.date}</Text>
        <Text style={styles.commentInformation}>{item.rating}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Comment = ({ navigation }) => {
  return (
    <FlatList
      data={commentsData}
      renderItem={({ item }) => <CommentItem item={item} navigation={navigation} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ backgroundColor: '#272239', alignItems: 'center' }}
    />
  );
};
export default Comment;
