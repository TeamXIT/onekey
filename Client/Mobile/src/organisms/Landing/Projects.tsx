import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

const Projects = (navigation) => {
  const [likeCounts, setLikeCounts] = useState({});


  const data = [
    { id: '1', title: 'Card 1', description: 'Description for Card 1', image: require('../../../asserts/Images/ic_seller.png'), likes: 0 },
    { id: '2', title: 'Card 2', description: 'Description for Card 2', image: require('../../../asserts/Images/ic_seller.png'), likes: 0 },
    { id: '3', title: 'Card 3', description: 'Description for Card 3', image: require('../../../asserts/Images/ic_seller.png'), likes: 0 },
    { id: '4', title: 'Card 4', description: 'Description for Card 4', image: require('../../../asserts/Images/ic_seller.png'), likes: 0 },
    { id: '5', title: 'Card 5', description: 'Description for Card 5', image: require('../../../asserts/Images/ic_seller.png'), likes: 0 },
    { id: '6', title: 'Card 6', description: 'Description for Card 6', image: require('../../../asserts/Images/ic_seller.png'), likes: 0 },
    { id: '7', title: 'Card 7', description: 'Description for Card 7', image: require('../../../asserts/Images/ic_seller.png'), likes: 0 },
    { id: '8', title: 'Card 8', description: 'Description for Card 8', image: require('../../../asserts/Images/ic_seller.png'), likes: 0 },
  ];

  const handleLikePress = (id) => {
    setLikeCounts(prevState => ({
      ...prevState,
      [id]: (prevState[id] || 0) + 1,
    }));
  };
  const handleCommentPress = (id) => {
    // Navigate to the CommentScreen passing the item id or any other necessary data
    navigation.navigate('Comment', { projectId: id });
  };


  const renderItem = ({ item }) => (
    <View style={styles.card}>

      <Image source={item.image} style={styles.image} />

      <TouchableOpacity
        onPress={() => handleLikePress(item.id)}
        style={styles.likeContainer}
      >
        <Image
          source={require('../../../asserts/Images/ic_like.png')}
          style={[styles.likeIcon, { tintColor: likeCounts[item.id] ? "#A73121" : "#777" }]}
        />
         <TouchableOpacity onPress={() => handleCommentPress(item.id)} style={styles.commentContainer}>
        <Image source={require('../../../asserts/Images/ic_comment.png')} style={styles.commentIcon} />
      </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.rightContent}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.likes}>{likeCounts[item.id] || 0} Likes</Text>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={1}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: '#F2E8C6',
    borderWidth: 1,
    borderColor: "#A73121",
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    height: 150,
    padding: 16,
    paddingLeft: 20,
    position: 'relative',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 20,
  },
  rightContent: {
    flex: 1,
    flexDirection: 'column',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
  },
  likes: {
    fontSize: 14,
    color: '#777',
  },
  likeIcon: {
    width: 24,
    height: 24,

  },
  likeContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: 10,
    marginBottom: 10,
  },
  commentContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: 10,
    marginBottom: 10,
  },
  commentIcon: {
    width: 24,
    height: 24,
    tintColor: '#777',
  }

});

export default Projects;
