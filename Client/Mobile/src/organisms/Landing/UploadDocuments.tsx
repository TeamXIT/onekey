import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, ScrollView, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { styles } from '../../styles/styles';
import TeamxClickableComponent from '../../molecules/TeamxClickableComponent';
import RNFS from 'react-native-fs';
import { PermissionsAndroid, Platform } from 'react-native';

const UploadDocument = () => {
  const [dynamicProps, setDynamicProps] = useState([]);
  const [selectedImage, setSelectedImage] = useState(require('../../images/ic_house.png'));
  const [viewDocument, setViewDocument] = useState(null); // State to hold the document to be viewed

  const handleReceiveFilePaths = (files) => {
    setDynamicProps(files.map(file => ({ type: 'File', path: file.FilePath })));
  };

  const deleteFile = (index) => {
    const updatedProps = [...dynamicProps];
    updatedProps.splice(index, 1);
    setDynamicProps(updatedProps);

    // If the deleted file is the currently selected image, reset the selected image
    if (selectedImage.uri === dynamicProps[index]?.path) {
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

  const handleSelectImage = async (path) => {
    try {
      const newPath = `${RNFS.DocumentDirectoryPath}/${path.split('/').pop()}`;
      await RNFS.copyFile(path, newPath);
      setViewDocument(`file://${newPath}`);
    } catch (error) {
      console.error('Error copying file:', error);
    }
  };

  const closeDocumentView = () => {
    setViewDocument(null);
  };

  const requestStoragePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Needed',
            message: 'This app needs the Storage permission to access files.',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Storage permission granted');
        } else {
          console.log('Storage permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  React.useEffect(() => {
    requestStoragePermission();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: styles.appPrimary.color }}>
      {viewDocument ? (
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={closeDocumentView} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close Document</Text>
          </TouchableOpacity>
          <WebView
            source={{ uri: viewDocument }}
            style={{ flex: 1 }}
          />
        </View>
      ) : (
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
            <TeamxClickableComponent
              image={require('../../images/ic_upload.png')}
              onFilePathsReceived={handleReceiveFilePaths}
            />
          </View>
        </ScrollView>
      )}
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

export default UploadDocument;
