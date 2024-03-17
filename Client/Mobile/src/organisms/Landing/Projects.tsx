import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/styles';

const Projects = ({ navigation }) => {
  const [likeCounts, setLikeCounts] = useState({});
  const [comment, setcomment] = useState(false);

  const data = [
    { id: '1', title: 'Card 1', description: 'Description for Card 1', image: require('../../images/ic_house.png'), likes: 0 },
    { id: '2', title: 'Card 2', description: 'Description for Card 2', image: require('../../images/ic_house.png'), likes: 0 },
    { id: '3', title: 'Card 3', description: 'Description for Card 3', image: require('../../images/ic_house.png'), likes: 0 },
    { id: '4', title: 'Card 4', description: 'Description for Card 4', image: require('../../images/ic_house.png'), likes: 0 },
    { id: '5', title: 'Card 5', description: 'Description for Card 5', image: require('../../images/ic_house.png'), likes: 0 },
    { id: '6', title: 'Card 6', description: 'Description for Card 6', image: require('../../images/ic_house.png'), likes: 0 },
    { id: '7', title: 'Card 7', description: 'Description for Card 7', image: require('../../images/ic_house.png'), likes: 0 },
    { id: '8', title: 'Card 8', description: 'Description for Card 8', image: require('../../images/ic_house.png'), likes: 0 },

  ];

  const handleLikePress = (id) => {
    setLikeCounts(prevState => ({
      ...prevState,
      [id]: (prevState[id] || 0) + 1,
    }));
  };

  const handleCommentPress = () => {
    navigation.navigate('comment');
    setcomment(true);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardimage} />
      <View style={styles.buttonlikeContainer}>
        <TouchableOpacity onPress={() => handleLikePress(item.id)}>
          <Image
            source={require('../../images/ic_like.png')}
            style={[styles.icon, { tintColor: likeCounts[item.id] ? "#A73121" : "#777" }]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCommentPress}>
          <Image
            source={require('../../images/ic_comment.png')}
            style={[styles.icon, { tintColor: comment ? "#777" : "#A73121" }]}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.likes}>{likeCounts[item.id] || 0} Likes</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={1}
    //contentContainerStyle={[styles.container, styles.Margin]}
    />
  );
};

export default Projects;
