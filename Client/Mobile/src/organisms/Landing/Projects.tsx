import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, } from 'react-native';
import { styles } from '../../styles/styles';
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { fetchAllProducts } from '../../reducers/Projects/projectSlice';
import Upload from '../Landing/Upload';
import RNFS from 'react-native-fs';

const Projects = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(state => state.product);
  const [likeCounts, setLikeCounts] = useState({});
  const likeIconActiveColor = "#FF0000";
  const likeIconInactiveColor = "#777";

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [product.data.products]);

  const uploadData = [{
    id: 1,
    title: 'Card 1',
    description: "Description for Card 1. Urban areal apartment located in a developing area, downtown district, offering modern amenities and convenient access to nearby businesses and recreational facilities. Walkable distance to all bus stops, grocery stores, Luxary hotels and Malls.",
    image: require('../../images/ic_house.png'),
    assets: [
      { name: "ic_home.png", value_type: "image/png", value: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=" },
      { name: "ic_home1.png", value_type: "image/png", value: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=" },
      // { name: "ic_home2.png", value_type: "image/png", value: "../../images/ic_home2.png" },
      // { name: "ic_home3.png", value_type: "image/png", value: "../../images/ic_home3.png" },
      // { name: "ic_home4.png", value_type: "image/png", value: "../../images/ic_home4.png" },
      // { name: "ic_home5.png", value_type: "image/png", value: "../../images/ic_home5.png" },

    ],
    dynamic_properties: [
      { name: "Lable 1", value_type: "", value: "Label 1 Description" },
      { name: "Lable 2", value_type: "", value: "Label 2 Description" },
      { name: "Lable 3", value_type: "", value: "Label 1 Description" },
      { name: "Lable 4", value_type: "", value: "Label 2 Description" }
    ]
  },
  ]

  // const data = [
  //   { id: '1', title: 'Card 1', description: 'Description for Card 1.urban apartment located in a bustling downtown district, offering modern amenities and convenient access to nearby businesses and recreational facilities.', image: require('../../images/ic_house.png'), like: 0 },
  //   { id: '2', title: 'Card 2', description: 'Description for Card 2.urban apartment located in a bustling downtown district, offering modern amenities and convenient access to nearby businesses and recreational facilities.', image: require('../../images/ic_house.png'), like: 0 },
  //   { id: '3', title: 'Card 3', description: 'Description for Card 3.urban apartment located in a bustling downtown district, offering modern amenities and convenient access to nearby businesses and recreational facilities.', image: require('../../images/ic_house.png'), like: 0 },
  //   { id: '4', title: 'Card 4', description: 'Description for Card 4.urban apartment located in a bustling downtown district, offering modern amenities and convenient access to nearby businesses and recreational facilities.', image: require('../../images/ic_house.png'), like: 0 },
  //   { id: '5', title: 'Card 5', description: 'Description for Card 5.urban apartment located in a bustling downtown district, offering modern amenities and convenient access to nearby businesses and recreational facilities.', image: require('../../images/ic_house.png'), like: 0 },
  //   { id: '6', title: 'Card 6', description: 'Description for Card 6.urban apartment located in a bustling downtown district, offering modern amenities and convenient access to nearby businesses and recreational facilities.', image: require('../../images/ic_house.png'), like: 0 },
  //   { id: '7', title: 'Card 7', description: 'Description for Card 7.urban apartment located in a bustling downtown district, offering modern amenities and convenient access to nearby businesses and recreational facilities.', image: require('../../images/ic_house.png'), like: 0 },
  //   { id: '8', title: 'Card 8', description: 'Description for Card 8.urban apartment located in a bustling downtown district, offering modern amenities and convenient access to nearby businesses and recreational facilities.', image: require('../../images/ic_house.png'), like: 0 },
  // ];

  const handleCardPress = (item) => {
    navigation.navigate('CardDetails', {
      cardData: {
        ...item,
        like: likeCounts[item.id] || 0,
        image: item.image
      },
      assets: item.assets,
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
    <View style={{ backgroundColor: "#48525e", flex: 1, }}>
      <FlatList
        data={uploadData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={1}
      />
    </View>
  );
};

export default Projects;
