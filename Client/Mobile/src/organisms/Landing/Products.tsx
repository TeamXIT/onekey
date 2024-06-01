import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, } from 'react-native';
import { styles } from '../../styles/styles';
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { fetchAllProducts } from '../../reducers/Product/productSlice';
import { CardOptions } from '../../helpers/Models/CardOptions';
import TeemxAcceptenceButton from '../../molecules/TeamxAcceptenceButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';


const Products = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(state => state.product);
  const [likeCounts, setLikeCounts] = useState({});
  const likeIconActiveColor = "#FF0000";
  const likeIconInactiveColor = "#777";
  const [isAccepted, setIsAccepted] = useState(false);

  const Role = AsyncStorage.getItem('Role');// State to keep track of selected card
  const RoleId = 3
  //  parseInt(Role,10); // Assign a values of 3 for BPO or 4 for Lawyer for acceptence


  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [product.data.products]);

  const uploadData = [{
    id: 1,
    title: 'Card 1',
    description: "Description for Card 1. Urban areal apartment located in a developing area, downtown district, offering modern amenities and convenient access to nearby businesses and recreational facilities. Walkable distance to all bus stops, grocery stores, Luxary hotels and Malls.",
    assets: [
      { name: "ic_home1.png", value_type: "image/png", value: "data:image/png;base64,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" },
      { name: "ic_home2.png", value_type: "image/png", value: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtUlEQVR4nO3SP2oCQRhA8Z8WYitYS5qUYqFXsPMUdt4iV8gd0uUQAcXS1kYrEa3FToSRwAjLsv7dBQv3wYMphvcxH8M70cIs+n8ulDZWCNENukXF+9gl4mf3GOSND3HIiJ89YvRMuIKvK+G036jeG6/h54F4iP6ifivewN8T8RCdonkp/oF5jniILvCZjnewLiAeolv0kgOWBcZD4iWZ5A3f5GUD0pQDlCu6yCTjh4xz3CtxlRNLzeteM7X5aAAAAABJRU5ErkJggg==" },
      { name: "ic_home3.png", value_type: "image/png", value: "data:image/png;base64,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" },
    ],
    dynamic_properties: [
      { name: "Lable 1", value_type: "", value: "Label 1 Description" },
      { name: "Lable 2", value_type: "", value: "Label 2 Description" },
      { name: "Lable 3", value_type: "", value: "Label 1 Description" },
      { name: "Lable 4", value_type: "", value: "Label 2 Description" }
    ],
    isAccepted: false
  }]

  const handleCardPress = (item) => {
    navigation.navigate('ProductDetails', {
      cardData: {
        ...item,
        like: likeCounts[item.id] || 0,
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

  const handleAccept = () => {
    setIsAccepted(true);
  };

  const renderItem = ({ item }) => {
    const descriptionToShow = item.description.length > 40 ?
      item.description.substring(0, 40) + '...' : item.description;
    return (
      <TouchableOpacity
        onPress={() => handleCardPress(item)}
        style={styles.cardContainer}>
        <View style={styles.cardStyle}>
          <View>
            {item.assets && item.assets.length > 0
              ? <Image source={{ uri: item.assets[0].value }} style={styles.cardimage} />
              : <Image src='../../images/ic_home.png' style={styles.cardimage} />
            }
          </View>
          <View style={styles.cardContent}>
            <View style={{flexDirection:'row',gap:50}}>
               <Text style={styles.cardTitle}>{item.title}</Text>
               <TouchableOpacity style={{height:25,width:80,borderRadius:40}}>
                 <LinearGradient
                     colors={['#888693', '#35314A']}
                     start={{ x: 0.5, y: 0 }}
                     end={{ x: 0.5, y: 1 }}
                     style={{height:25,width:80,borderRadius:40}}
                  >
                    <Text style={{color:'white',textAlign:'center',fontSize:15,paddingTop:2}}>SALE</Text>
                  </LinearGradient>
                </TouchableOpacity>
            </View>

            <Text style={styles.cardDescription}>{descriptionToShow}</Text>




            <View style={styles.buttonContainer}>
              <Text style={styles.cardLikes}>{likeCounts[item.id] || 0} Likes</Text>
              {(RoleId === CardOptions.BPO) || (RoleId === CardOptions.Lawyer) ? (
                  <View style={styles.acceptContainer}>
                  {isAccepted ? (
                      <TouchableOpacity onPress={handleAccept} >
                      <LinearGradient
                          colors={['#888693', '#35314A']}
                          start={{ x: 0.5, y: 0 }}
                          end={{ x: 0.5, y: 1 }}
                          style={{height:25,width:80,borderRadius:40}}
                       >
                         <Text style={{color:'white',textAlign:'center',fontSize:15,paddingTop:2}}>ACCEPTED</Text>
                       </LinearGradient>
                     </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={handleAccept} >
                    <LinearGradient
                        colors={['#888693', '#35314A']}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        style={{height:25,width:80,borderRadius:40}}
                     >
                       <Text style={{color:'white',textAlign:'center',fontSize:15,paddingTop:2}}>ACCEPT</Text>
                     </LinearGradient>
                   </TouchableOpacity>
                    
                  )}
                </View>
              ) : (
                <>
                  <TouchableOpacity onPress={() => handleLikePress(item.id)}>
                    <Image source={require('../../images/ic_like1.png')}
                      style={{ tintColor: likeCounts[item.id] ? likeIconActiveColor : likeIconInactiveColor }} />
                  </TouchableOpacity><TouchableOpacity onPress={() => handleCommentPress(item)}>
                    <Image
                      source={require('../../images/ic_comment.png')}
                      style={{ tintColor: likeIconInactiveColor }} />
                  </TouchableOpacity>
                </>
              )}

                </View>

          </View>
          </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ backgroundColor:'#272239', flex: 1, }}>
      <FlatList
        data={uploadData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={1}
      />
    </View>
  );
};

export default Products;
