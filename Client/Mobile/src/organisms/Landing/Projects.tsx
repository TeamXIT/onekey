import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity,} from 'react-native';
import { styles } from '../../styles/styles';


const Projects = ({ navigation }) => {
  const [likeCounts, setLikeCounts] = useState({});
  const likeIconActiveColor = "#0987F0";
  const likeIconInactiveColor = "#777";

  const data = [
    { id: '1', title: 'Card 1', description: 'Description for Card 1', image: require('../../images/ic_house.png'), like: 0 },
    { id: '2', title: 'Card 2', description: 'Description for Card 2', image: require('../../images/ic_house.png'), like: 0 },
    { id: '3', title: 'Card 3', description: 'Description for Card 3', image: require('../../images/ic_house.png'), like: 0 },
    { id: '4', title: 'Card 4', description: 'Description for Card 4', image: require('../../images/ic_house.png'), like: 0 },
    { id: '5', title: 'Card 5', description: 'Description for Card 5', image: require('../../images/ic_house.png'), like: 0 },
    { id: '6', title: 'Card 6', description: 'Description for Card 6', image: require('../../images/ic_house.png'), like: 0 },
    { id: '7', title: 'Card 7', description: 'Description for Card 7', image: require('../../images/ic_house.png'), like: 0 },
    { id: '8', title: 'Card 8', description: 'Description for Card 8', image: require('../../images/ic_house.png'), like: 0 },
  ];

  const handleCardPress = (item) => {
    navigation.navigate('CardDetails', { cardData: { ...item, like: likeCounts[item.id] || 0 } });
  };

  const handleLikePress = (id) => {
    setLikeCounts(prevState => ({
      ...prevState,
      [id]: prevState[id] ? prevState[id] - 1 : 1, 
    }));
  };

  const handleCommentPress = (item) => {
    navigation.navigate('comment', { commentData: item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCardPress(item)}>
      <View style={styles.cardStyle}>
        <View>
          <Image source={item.image} style={styles.cardimage} />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
          <Text style={styles.cardLikes}>{likeCounts[item.id] || 0} Likes</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => handleLikePress(item.id)}>
            <Image
              source={require('../../images/ic_like.png')}
              style={[styles.LikeIcon, { tintColor: likeCounts[item.id] ? likeIconActiveColor : likeIconInactiveColor }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleCommentPress(item)}>
            <Image
              source={require('../../images/ic_comment.png')}
              style={[styles.commentIcon, { tintColor: likeIconInactiveColor }]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={1}
      contentContainerStyle={styles.cardcontainer}
    />
  );
};

export default Projects;
