import React, { useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import ImagePicker from 'react-native-image-crop-picker';
import { styles } from "../styles/styles"


const TeamxImageComponent = ({ image, onImagePathsReceived }) => {
    const [selectedImages, setSelectedImages] = useState([]);

    const openImagePicker = () => {
        const options = {
            width: 300,
            height: 400,
            cropping: false,
            multiple: true,
        };

        ImagePicker.openPicker(options)
            .then(selectedImages => {
                const imagePaths = selectedImages.map((image) => image.path);
                setSelectedImages(prevImages => [...prevImages, ...imagePaths]);
                onImagePathsReceived(imagePaths);
            })
            .catch(error => {
                console.log("Error selecting images:", error);
            });
    };

    const handleDeleteImage = (index) => {
        setSelectedImages(prevImages => prevImages.filter((_, i) => i !== index));
    };

    const renderImages = () => {
        const rows = [];
        for (let i = 0; i < selectedImages.length; i += 3) {
            const rowImages = selectedImages.slice(i, i + 3).map((image, index) => (
                <View key={index} style={styles.imageContainer}>
                    <Image source={{ uri: image }} style={styles.imagePreview} />
                    <TouchableOpacity onPress={() => handleDeleteImage(i + index)} style={styles.deleteButton}>
                        <Image source={require('../images/ic_delete.png')} style={styles.deleteButtonText} />
                    </TouchableOpacity>
                </View>
            ));
            rows.push(<View key={i} style={styles.uploadrow}>{rowImages}</View>);
        }
        return rows;
    };

    return (
        <View style={styles.container}>
            {renderImages()}
            <TouchableOpacity onPress={openImagePicker}>
                <Image source={require('../../src/images/ic_upload.png')} />
            </TouchableOpacity>
        </View>
    );
};

export default TeamxImageComponent;
