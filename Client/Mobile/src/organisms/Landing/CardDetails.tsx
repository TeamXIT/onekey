import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { styles } from '../../styles/styles';
import { ScrollView } from 'react-native-gesture-handler';

const CardDetails = ({ route, navigation }) => {
  // const thumbnailImages = [
  //   require('../../images/ic_home1.png'),
  //   require('../../images/ic_home2.png'),
  //   require('../../images/ic_home3.png'),
  //   require('../../images/ic_home4.png'),
  //   require('../../images/ic_home5.png'),
  //   require('../../images/ic_home6.png'),
  //   require('../../images/ic_home7.png'),
  // ];

  const { cardData, assets, isLiked, updateLikeCount } = route.params;
  const images = [cardData.image, ...assets.map(asset => asset.value)];
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);
  const [isLikedState, setIsLikedState] = useState(isLiked);
  const blue = "#0987F0";
  const red = "#FF0000"
console.log("Images: ", images);
  const handleThumbnailPress = (index) => {
    if (index < 4) {
      setMainImageIndex(index + 1);
    } else {
      navigation.navigate("imagelist", images);
    }
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
      <Image
        source={images[mainImageIndex] ? images[mainImageIndex] : null}
        style={styles.CardDetailsmainImage}
      />

     {/* Thumbnails */}
     <View style={styles.thumbnailsContainer}>
        {/* Render main image */}
        <TouchableOpacity onPress={() => handleThumbnailPress(0)}>
          <View>
            <Image
              source={images[0]}
              style={[
                styles.thumbnailImage,
                selectedThumbnailIndex === 0 && { borderColor: blue }
              ]}
            />
          </View>
        </TouchableOpacity>
        {/* Render asset images */}
        {images.map((imagePath, index) => (
          <TouchableOpacity key={index} onPress={() => handleThumbnailPress(index)}>
            <View>
              <Image
                source={{uri: imagePath}}
                style={[
                  styles.thumbnailImage,
                  selectedThumbnailIndex === index + 1 && { borderColor: blue }
                ]}
              />
              {index === 3 && (
                <View style={styles.plusIconContainer}>
                  <Text style={styles.plusIcon}>+{assets.length - 4}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>


      {/* Title and Description */}
      <View style={styles.titleDescriptionContainer}>
        <Text style={styles.carddetailsTitle}>{cardData.title}</Text>
        <Text style={styles.carddetailsDescription}>{cardData.description}</Text>
        {/* Dynamic Properties */}
        {cardData.dynamic_properties && cardData.dynamic_properties.map((property, index) => (
          <View key={index}>
            <Text style={styles.carddetailsTitle}>{property.name}</Text>
            <Text style={styles.carddetailsDescription}>{property.value}</Text>
          </View>
        ))}
      </View>
    </View>
    </ScrollView>
  );
};

export default CardDetails;
