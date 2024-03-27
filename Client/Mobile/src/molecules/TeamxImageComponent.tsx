import React, { useState } from "react";
import { View, Image, TouchableOpacity, Alert } from "react-native";
import ImagePicker from 'react-native-image-crop-picker';
import DocumentPicker from 'react-native-document-picker'
import { styles } from "../styles/styles"

const TeamxImageComponent = ({ image, onFilePathsReceived }) => {
    const [selectedFile, setSelectedFile] = useState([]);

    const openSelectPicker = () => {
        Alert.alert(
            "",
            "Select Picker",
            [
                // {
                //     text: "Cancel",
                //     style: "cancel"
                // },
                // {
                //     text: "Record Video",
                //     onPress: () => TakeCamera(true)
                // },
                {
                    text: "Select File",
                    onPress: () => openFilePicker()
                },
                {
                    text: "Take Picture",
                    onPress: () => OpenCamera(false)
                },
                {
                    text: "Select Picture",
                    onPress: () => openImagePicker()
                },
            ]
        );
    }

    const openFilePicker = async () => {
        await DocumentPicker.pick({
            type: [
                DocumentPicker.types.pdf,
                DocumentPicker.types.images,
                DocumentPicker.types.plainText,
                DocumentPicker.types.video,
                DocumentPicker.types.doc,
                DocumentPicker.types.docx,
                DocumentPicker.types.xlsx
            ],
            allowMultiSelection: true
        }).then(files => {
            console.log("FileSelection: ", files);
            const fileData = files.map(file => ({
                FileName: file.name,
                FilePath: file.uri,
                FileType: file.type
            }));
            setSelectedFile(prevFiles => [...prevFiles, ...fileData]);
            onFilePathsReceived(fileData);
        }).catch((error) => {
            console.log("Error in openFilePicker:", error);
        });
    };

    const OpenCamera = (IsVideo: boolean) => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: false,
            multiple: false,
            mediaType: IsVideo ? "video" : "photo",
        }).then((file) => {
            const fileData = [{
                FilePath: file.path,
                FileType: file.mime,
                FileName: file.path.substring(file.path.lastIndexOf('/') + 1)
            }];
           
            setSelectedFile(prevFiles => [...prevFiles, ...fileData]);
            onFilePathsReceived(fileData);
        }).catch(error => {
            console.log("Error in TakeCamera:", error);
        });
    }

    const openImagePicker = () => {
        const options = {
            width: 300,
            height: 400,
            cropping: false,
            multiple: true,
        };
        ImagePicker.openPicker(options)
            .then(images => {
                console.log("Selected images:", images);
                const fileData = images.map((file: { path: string; mime: any; }) => ({
                    FilePath: file.path,
                    FileType: file.mime,
                    FileName: file.path.substring(file.path.lastIndexOf('/') + 1)
                }));
                
                setSelectedFile(prevFiles => [...prevFiles, ...fileData]);
                onFilePathsReceived(fileData);
            })
            .catch(error => {
                console.log("Error selecting images:", error);
            });
    };

    const handleDeleteImage = (index: number) => {
        Alert.alert(
            "Confirmation",
            "Are you sure you want to delete this image?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => {
                        setSelectedFile(prevFiles => prevFiles.filter((_, i) => i !== index));
                    }
                }
            ]
        );
    };

    return (
        <View style={styles.uploadImagecontainer}>
            {selectedFile.map((file, index) => (
                <View key={index} style={styles.imageContainer}>
                     <Image source={{ uri: file.FilePath }} style={styles.imagePreview} />
                    <TouchableOpacity onPress={() => handleDeleteImage(index)} style={styles.deleteButton}>
                        <Image source={require('../images/ic_delete.png')} style={styles.deleteButtonText} />
                    </TouchableOpacity>
                </View>
            ))}
            <TouchableOpacity onPress={openSelectPicker} style={styles.uploadButtonStyle}>
                <Image source={require('../../src/images/ic_upload.png')} />
            </TouchableOpacity>
        </View>
    );
};

export default TeamxImageComponent;