import React, { useEffect, useState } from 'react';
import { View, Image, Animated, TouchableOpacity, Text, ScrollView, TouchableHighlight } from 'react-native';
import { styles } from '../../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import TeamXStarRating from '../../molecules/TeamXStarRating';
import { useNavigation } from '@react-navigation/native';
import TeamxBottomSheet from '../../molecules/TeamxBottomSheet';

const Card = ({ email, phone, name, navigation }) => {
  const handleCardPress = () => {
    navigation.navigate('DetailPage', { email, phone, name });
  };
 
  return (
    <TouchableHighlight  onPress={handleCardPress}>
      <View style={styles.titleDescriptionContainer}>
        <View style={styles.productstar}>
          <TeamXStarRating totalStars={5} />
        </View>
        <View style={styles.cardContent}>
          <View>
            <Text style={styles.productbpolawyer}>Name: {name}</Text>
            <Text style={styles.productbpolawyer}>Email: {email}</Text>
            <Text style={styles.productbpolawyer}>Phone: {phone}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const ProductDetails = ({ route }) => {
  const { cardData, assets, isLiked, updateLikeCount } = route.params;
  const [selectedImage, setSelectedImage] = useState({ value: '' });
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);
  const [isLikedState, setIsLikedState] = useState(isLiked);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [bottomSheetContent, setBottomSheetContent] = useState(null);
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

  const showBottomSheet = (content) => {
    setBottomSheetContent(
      <ScrollView>
        {content}
      </ScrollView>
    );
    setBottomSheetVisible(true);
  };

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

          {/* BPO Section */}
          <View style={styles.titleDescriptionContainer}>
            <TouchableOpacity style={styles.row} onPress={() => showBottomSheet(
              <>
                <Card navigation={navigation} name="BPO1" email="example1@bpo.com" phone="123-456-7890" />
                <Card navigation={navigation} name="BPO2" email="example2@bpo.com" phone="123-456-7891" />
                <Card navigation={navigation} name="BPO3" email="example3@bpo.com" phone="123-456-7892" />
                <Card navigation={navigation} name="BPO4" email="example3@bpo.com" phone="123-456-7892" />
              </>
            )}>
              <Text style={styles.cardbpolawyerTitle}>BPOs</Text>
              <Image
                source={require('../../images/ic_rightSingleArrow.png')}
                style={styles.cardArrowIcon}
              />
            </TouchableOpacity>
          </View>

          {/* Lawyer Section */}
          <View style={styles.titleDescriptionContainer}>
            <TouchableOpacity style={styles.row} onPress={() => showBottomSheet(
              <>
               <Card navigation={navigation} name="Lawyer1" email="example1@lawyer.com" phone="123-456-7890" />
                <Card navigation={navigation} name="Lawyer2" email="example2@lawyer.com" phone="123-456-7891" />
                <Card navigation={navigation} name="Lawyer3" email="example3@lawyer.com" phone="123-456-7892" />
                <Card navigation={navigation} name="Lawyer4" email="example1@lawyer.com" phone="123-456-7890" />
              </>
            )}>
              <Text style={styles.cardbpolawyerTitle}>Lawyers</Text>
              <Image
                source={require('../../images/ic_rightSingleArrow.png')}
                style={styles.cardArrowIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <TeamxBottomSheet visible={bottomSheetVisible} onClose={() => setBottomSheetVisible(false)}>
        {bottomSheetContent}
      </TeamxBottomSheet>
    </SafeAreaView>
  );
};

export default ProductDetails;
