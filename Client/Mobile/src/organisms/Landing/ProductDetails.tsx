import React, { useEffect, useState } from 'react';
import { View, Image, Animated, TouchableOpacity, Text } from 'react-native';
import { styles } from '../../styles/styles';
import { ScrollView } from 'react-native-gesture-handler';

const ProductDetails = ({ route, navigation }) => {
  const { cardData, assets, isLiked, updateLikeCount } = route.params;
  const [selectedImage, setSelectedImage] = useState({
    value: ''
  });
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);
  const [isLikedState, setIsLikedState] = useState(isLiked);
  const blue = "#0987F0";
  const red = "#FF0000"

  useEffect(() => {
    if (assets) {
      setSelectedImage(assets[0]);
    }
  }, []);

  const handleThumbnailPress = (index) => {
    setSelectedImage(assets[index]);
    setSelectedThumbnailIndex(index);
  };

  const handleLikePress = () => {
    const newLikeState = !isLiked;
    updateLikeCount(cardData.id, newLikeState ? 1 : 0);
    setIsLikedState(!isLikedState);
    setIsLikedState(newLikeState);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 5 }}>
      <View style={styles.CardDetailscontainer}>
        {/* Back and Like Icon Container */}
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../images/ic_back.png')}
              style={styles.carddeatilsIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLikePress}>
            <Image
              source={require('../../images/ic_like1.png')}
              style={[
                styles.carddeatilsIcon,
                isLikedState && { tintColor: red }
              ]}
            />
          </TouchableOpacity>
        </View>

        {/* Main Image */}
        <Animated.Image
          source={{ uri: selectedImage.value }}
          defaultSource={require('../../images/ic_house.png')}
          style={styles.CardDetailsmainImage}
        />

        {/* Thumbnails */}
        <View style={styles.thumbnailsContainer}>
          {/* Render asset images */}
          {assets.map((asset, index) => (
            <TouchableOpacity key={index} onPress={() => handleThumbnailPress(index)}>
              <View>
                <Image
                  source={{ uri: asset.value }}
                  style={[
                    styles.thumbnailImage,
                    selectedThumbnailIndex === index && { borderColor: blue }
                  ]}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Title and Description */}
        <View style={styles.titleDescriptionContainer}>
          <Text style={styles.carddetailsTitle}>{cardData.title}</Text>
          <Text style={styles.carddetailsDescription}>{cardData.description}</Text>
        </View>

        
          {/* Dynamic Properties */}
          {cardData.dynamic_properties && cardData.dynamic_properties.map((property, index) => (
            <View key={index} style={styles.titleDescriptionContainer}>
              <Text style={styles.carddetailsTitle}>{property.name}</Text>
              <Text style={styles.carddetailsDescription}>{property.value}</Text>
            </View>
          ))}
        </View>
      


        {/* Dynamic Properties */}
        {cardData.dynamic_properties && cardData.dynamic_properties.map((property, index) => (
          <View key={index} style={styles.titleDescriptionContainer}>
            <Text style={styles.carddetailsTitle}>{property.name}</Text>
            <Text style={styles.carddetailsDescription}>{property.value}</Text>
          </View>


        ))}
        <TouchableOpacity>
          <View style={styles.titleDescriptionContainer}>
            <Text style={styles.carddetailsTitle}>BPO</Text>
            <View style={styles.titleDescriptionContainer}>
              <Text style={styles.carddetailsDescription}>Email: example@bpo.com</Text>
              <Text style={styles.carddetailsDescription}>Phone: 123-456-7890</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.titleDescriptionContainer}>
            <Text style={styles.carddetailsTitle}>Lawyer</Text>
            <View style={styles.titleDescriptionContainer}>
              <Text style={styles.carddetailsDescription}>Email: example@lawyer.com</Text>
              <Text style={styles.carddetailsDescription}>Phone: 123-456-7890</Text>
            </View>
          </View>
        </TouchableOpacity>
    

    </ScrollView>
  );
};

export default ProductDetails;
