import React, { useState } from "react";
import { View, Image, TouchableOpacity, Alert } from "react-native";
import ImagePicker from 'react-native-image-crop-picker';
import { styles } from "../styles/styles"

const TeamxImageComponent = ({ image, onImagePathsReceived }) => {
    let FileData: [{
        FileName: string,
        FilePath: string,
        FileType: string
    }]

    const [selectedImages, setSelectedImages] = useState([]);

    const openImagePicker = () => {
        // https://www.npmjs.com/package/react-native-document-picker
        // Add validation to only uplaod png, jpg, jpeg, txt, pdf, doc, word, excel
        const options = {
            width: 300,
            height: 400,
            cropping: false,
            multiple: true,
        };

        ImagePicker.openPicker(options)
            .then(selectedImages => {
                console.log("Selected file: ", selectedImages);
                const imagePaths = selectedImages.map((image) => image.path);
                setSelectedImages(prevImages => [...prevImages, ...imagePaths]);
                onImagePathsReceived(imagePaths);
            })
            .catch(error => {
                console.log("Error selecting images:", error);
            });
    };

    const handleDeleteImage = (index) => {
        Alert.alert(
            "Confirmation",
            "Are you sure you want to delete this image?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => {
                        setSelectedImages(prevImages => prevImages.filter((_, i) => i !== index));
                    }
                }
            ]
        );
    };

    return (
        <View style={styles.uploadImagecontainer}>
            {selectedImages.map((image, index) => (
                <View key={index} style={styles.imageContainer}>
                    <Image source={{ uri: image }} style={styles.imagePreview} />
                    <TouchableOpacity onPress={() => handleDeleteImage(index)} style={styles.deleteButton}>
                        <Image source={require('../images/ic_delete.png')} style={styles.deleteButtonText} />
                    </TouchableOpacity>
                </View>
            ))}
            <TouchableOpacity onPress={openImagePicker} style={styles.uploadButtonStyle}>
                <Image source={require('../../src/images/ic_upload.png')} style={styles.uploadImageStyle} />
            </TouchableOpacity>
        </View>
    );
};

export default TeamxImageComponent;