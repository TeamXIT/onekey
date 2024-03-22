import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from '../../../src/styles/styles';

const ImageList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const images = [
    require('../../../src/images/ic_homeImageOne.png'),
    require('../../../src/images/ic_homeImageTwo.png'),
    require('../../../src/images/ic_homeImageThree.png'),
    require('../../../src/images/ic_homeImageFour.png'),
    require('../../../src/images/ic_homeImageFive.png'),
    
  ];

  
  const goToPrevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNextSlide = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
return (
    <View style={styles.Slidercontainer}>
      <TouchableOpacity onPress={goToPrevSlide} style={styles.Sliderarrow}>
        <Image source={require('../../../src/images/ic_leftSingleArrow.png')} style={styles.SliderarrowIcon} />
      </TouchableOpacity>
      <Image source={images[currentIndex]} style={styles.Sliderimage} />
      <TouchableOpacity onPress={goToNextSlide} style={styles.Sliderarrow}>
        <Image source={require('../../../src/images/ic_rightSingleArrow.png')} style={styles.SliderarrowIcon} />
      </TouchableOpacity>
    </View>
  );
};
export default ImageList;
