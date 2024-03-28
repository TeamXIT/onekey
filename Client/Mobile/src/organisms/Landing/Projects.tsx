import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, TouchableHighlight, } from 'react-native';
import { styles } from '../../styles/styles';
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { fetchAllProducts } from '../../reducers/Projects/projectSlice';



const Projects = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(state => state.product);
  const [likeCounts, setLikeCounts] = useState({});
  const likeIconActiveColor = "#FF0000";
  const likeIconInactiveColor = "#777";

  const data = [
    { id: '1', title: 'Card 1', description: 'Description for Card 1.urban apartment located in a bustling downtown district, offering modern amenities and convenient access to nearby businesses and recreational facilities.', image: require('../../images/ic_house.png'), like: 0 },
    { id: '2', title: 'Card 2', description: 'Description for Card 2.urban apartment located in a bustling downtown district, offering modern amenities and convenient access to nearby businesses and recreational facilities.', image: require('../../images/ic_house.png'), like: 0 },
    { id: '3', title: 'Card 3', description: 'Description for Card 3.urban apartment located in a bustling downtown district, offering modern amenities and convenient access to nearby businesses and recreational facilities.', image: require('../../images/ic_house.png'), like: 0 },
    { id: '4', title: 'Card 4', description: 'Description for Card 4.urban apartment located in a bustling downtown district, offering modern amenities and convenient access to nearby businesses and recreational facilities.', image: require('../../images/ic_house.png'), like: 0 },
    { id: '5', title: 'Card 5', description: 'Description for Card 5.urban apartment located in a bustling downtown district, offering modern amenities and convenient access to nearby businesses and recreational facilities.', image: require('../../images/ic_house.png'), like: 0 },
    { id: '6', title: 'Card 6', description: 'Description for Card 6.urban apartment located in a bustling downtown district, offering modern amenities and convenient access to nearby businesses and recreational facilities.', image: require('../../images/ic_house.png'), like: 0 },
    { id: '7', title: 'Card 7', description: 'Description for Card 7.urban apartment located in a bustling downtown district, offering modern amenities and convenient access to nearby businesses and recreational facilities.', image: require('../../images/ic_house.png'), like: 0 },
    { id: '8', title: 'Card 8', description: 'Description for Card 8.urban apartment located in a bustling downtown district, offering modern amenities and convenient access to nearby businesses and recreational facilities.', image: require('../../images/ic_house.png'), like: 0 },
  ];

  const handleCardPress = (item) => {
    navigation.navigate('CardDetails', {
      cardData: {
        ...item,
        like: likeCounts[item.id] || 0,
        image: item.image
      },
      isLiked: likeCounts[item.id] > 0,
      updateLikeCount: updateLikeCount,
    });
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

  const updateLikeCount = (id, likeCount) => {
    setLikeCounts(prevState => ({
      ...prevState,
      [id]: likeCount,
    }));
  };

  const renderItem = ({ item }) => {
   
    const descriptionToShow = item.description.length > 40 ?
      item.description.substring(0, 40) + '...' : item.description;

    return (
      <TouchableOpacity
        onPress={() => handleCardPress(item)}
        style={styles.cardContainer}
      >
        <View style={styles.cardStyle}>
          <View>
            <Image source={item.image} style={styles.cardimage} />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{descriptionToShow}</Text>

                          
              <View style={styles.buttonContainer}>
              <Text style={styles.cardLikes}>{likeCounts[item.id] || 0} Likes</Text>
                <TouchableOpacity onPress={() => handleLikePress(item.id)}>
                  <Image
                    source={require('../../images/ic_like1.png')}
                    style={{ tintColor: likeCounts[item.id] ? likeIconActiveColor : likeIconInactiveColor }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleCommentPress(item)}>
                  <Image
                    source={require('../../images/ic_comment.png')}
                    style={{ tintColor: likeIconInactiveColor }}
                  />
                </TouchableOpacity>
              </View>
           
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={1}
    />
  );
};

export default Projects;
