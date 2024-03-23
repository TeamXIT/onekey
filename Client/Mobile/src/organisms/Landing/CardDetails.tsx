import React, { useState } from 'react';
import { View, Image, ScrollView, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { styles } from '../../styles/styles';

const CardDetails = ({ route, navigation}) => {
  const thumbnailImages = [
    require('../../images/ic_home1.png'),
    require('../../images/ic_home2.png'),
    require('../../images/ic_home3.png'),
    require('../../images/ic_home1.png'),
    require('../../images/ic_home1.png'),
    require('../../images/ic_home1.png'),
    require('../../images/ic_home1.png'),
    require('../../images/ic_home1.png'),
  ];

  const { cardData, isLiked } = route.params; 
  const images = [cardData.image, ...thumbnailImages];
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);
  const [isLikedState, setIsLikedState] = useState(isLiked); 
  const blue = "#0987F0";
  const red ="#FF0000"

  // const goToPreviousImage = () => {
  //   if (mainImageIndex > 0) {
  //     setMainImageIndex(mainImageIndex - 1);
  //     setSelectedThumbnailIndex(mainImageIndex - 1);
  //   }
  // };

  // const goToNextImage = () => {
  //   if (mainImageIndex < thumbnailImages.length - 1) {
  //     if (mainImageIndex < 5) {
  //       setMainImageIndex(mainImageIndex + 1);
  //       setSelectedThumbnailIndex(mainImageIndex + 1);
  //     } else {
  //       Alert.alert("Remaining images", `Remaining images: ${thumbnailImages.length - 4}`);
  //     }
  //   } else {
  //     Alert.alert("End of images", "You've reached the end of the images.");
  //   }
  // };

  const handleThumbnailPress = (index) => {
    if (index < 4) {
      setMainImageIndex(index + 1); 
    } else {
      
      Alert.alert("Remaining images", `Remaining images: ${thumbnailImages.length - 4}`);
    }
    setSelectedThumbnailIndex(index);
  };

  const handleLikePress = () => {
    setIsLikedState(!isLikedState);
  };

  return (
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

      {/* Navigation Arrows
      <View style={styles.navigationArrows}>
        <TouchableOpacity onPress={goToPreviousImage}>
          <Text style={styles.arrowText}>{"<"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToNextImage}>
          <Text style={styles.arrowText}>{">"}</Text>
        </TouchableOpacity>
      </View> */}

      {/* Thumbnails */}
      <ScrollView horizontal style={styles.thumbnailsContainer}>
        {thumbnailImages.map((img, index) => (
          <TouchableOpacity key={index} onPress={() => handleThumbnailPress(index)}>
            <View>
              <Image
                source={img}
                style={[
                  styles.thumbnailImage,
                  index === selectedThumbnailIndex && { borderColor: blue }
                ]}
              />
              {index === 4 && (
                <View style={styles.plusIconContainer}>
                  <Text style={styles.plusIcon}>+4</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CardDetails;

// const styles = StyleSheet.create({
 
  // navigationArrows: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   position: 'absolute',
  //   top: 150,
  //   width: '100%',
  // },
  // arrowText: {
  //   fontSize: 50,
  //   backgroundColor: "white",
  // },
  
// });
