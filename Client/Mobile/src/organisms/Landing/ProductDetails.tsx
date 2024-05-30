import React, { useEffect, useState } from 'react';
import { View, Image, Animated, TouchableOpacity, Text } from 'react-native';
import { styles } from '../../styles/styles';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import TeamXStarRating from '../../molecules/TeamXStarRating';
import { useNavigation } from '@react-navigation/native';

const ProductDetails = ({ route }) => {
  const { cardData, assets, isLiked, updateLikeCount } = route.params;
  const [selectedImage, setSelectedImage] = useState({ value: '' });
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);
  const [isLikedState, setIsLikedState] = useState(isLiked);
  const navigation = useNavigation();
  const blue = "#0987F0";
  const red = "#FF0000";

  useEffect(() => {
    if (assets) {
      setSelectedImage(assets[0]);
    }
  }, [assets]);

  const handleThumbnailPress = (index) => {
    setSelectedImage(assets[index]);
    setSelectedThumbnailIndex(index);
  };

  const handleLikePress = () => {
    const newLikeState = !isLikedState;
    updateLikeCount(cardData.id, newLikeState ? 1 : 0);
    setIsLikedState(newLikeState);
  };

  const Card = ({ title, email, phone }) => (
    <TouchableOpacity onPress={() => navigation.navigate('DetailPage')}>
      <View style={styles.titleDescriptionContainer}>
        <View style={styles.productbpolawyer}>
          <Text style={styles.carddetailsTitle}>{title}</Text>
          <View style={styles.productstar}>
            <TeamXStarRating totalStars={5} />
          </View>
        </View>
        <View style={styles.titleDescriptionContainer}>
          <Text style={styles.carddetailsDescription}>Email: {email}</Text>
          <Text style={styles.carddetailsDescription}>Phone: {phone}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: styles.appPrimary.color }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
          <Card title="BPO    " email="example@bpo.com" phone="123-456-7890" />
          <Card title="Lawyer" email="example@lawyer.com" phone="123-456-7890" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;
