import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, ScrollView, SafeAreaView } from 'react-native';
import TeamxImageComponent from '../../molecules/TeamxImageComponent';
import { styles } from '../../styles/styles';
import TeamxClickableComponent from '../../molecules/TeamxClickableComponent';

const UploadDocument = ({ navigation }) => {
  const [imagePaths, setImagePaths] = useState([]);
  const [dynamicProps, setDynamicProps] = useState([]);
  const [selectedImage, setSelectedImage] = useState(require('../../images/ic_house.png'));
  const [isSelected, setIsSelected] = useState(false); // State to toggle image selection

  const handleReceiveFilePaths = (paths) => {
    if (paths.length > 0) {
      // setSelectedImage({ uri: paths[0] }); // Set to the first image by default
    }
    setImagePaths(paths);
    setDynamicProps(paths.map(path => ({ type: 'File', path })));
  };

  const deleteFile = (index) => {
    const updatedProps = [...dynamicProps];
    if (updatedProps[index].type === 'File') {
      setImagePaths(prev => prev.filter((_, i) => i !== index));
    }
    updatedProps.splice(index, 1);
    setDynamicProps(updatedProps);

    // If the deleted file is the currently selected image, reset the selected image
    if (selectedImage.uri === dynamicProps[index].path) {
      setSelectedImage(require('../../images/ic_house.png')); // Reset to the default image
    }
  };

  const handleDeleteFile = (index) => {
    Alert.alert(
      'Delete Confirmation',
      'Are you sure you want to delete this?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: () => deleteFile(index) },
      ],
    );
  };

  const handleSelectImage = (path) => {
    if (isSelected) {
      navigation.navigate('DocumentViewer', { imagePath: path });
    } else {
      setSelectedImage({ uri: path });
      setIsSelected(true); // Set the state to true after selecting an image
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: styles.appPrimary.color }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
       
          <Image
            source={selectedImage}
            style={styles.CardDetailsmainImage}
          />
       
        {dynamicProps.map((item, index) => (
          <View style={styles.displayedLabelContainer} key={index}>
            <TouchableOpacity
              onPress={() => handleDeleteFile(index)}
              style={styles.deleteIcon}>
              <Image source={require('../../images/ic_delete.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSelectImage(item.path)}>
              <Image source={{ uri: item.path }} style={styles.uploadedImage} />
            </TouchableOpacity>
            <Text style={styles.uploadTitleText}>{item.path.split('/').pop()}</Text>
          </View>
        ))}

        <View style={[styles.fileButton, { flexDirection: 'row' }]}>
        <TouchableOpacity onPress={() => navigation.navigate('DocumentViewer')}>
        <TeamxClickableComponent // Updated to use TeamxClickableComponent
            image={require('../../images/ic_upload.png')}
            onFilePathsReceived={handleReceiveFilePaths}
          />
        </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.uploadBtn}
        onPress={() => {
          Alert.alert("Upload Alert", "Do you want to upload?", [
            {
              text: "OK", onPress: () => {
                // Handle upload logic here
              }
            }
          ]);
        }}>
        <Text style={styles.uploadButtonText}>UPLOAD</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default UploadDocument