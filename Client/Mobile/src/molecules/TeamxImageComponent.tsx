import React, { useState } from "react";
import { View, Image, TouchableOpacity, Alert } from "react-native";
import ImagePicker from 'react-native-image-crop-picker';
import DocumentPicker from 'react-native-document-picker'
import { styles } from "../styles/styles"

const TeamxImageComponent = ({ image, onFilePathsReceived }) => {
    const [selectedFile, setSelectedFile] = useState([]);
    const fileIcons = {
        'pdf': require('../images/ic_pdf.png'),
        'doc': require('../images/ic_doc.png'),
        'docx': require('../images/ic_word.png'),
        'xls': require('../images/ic_xls.png'),
        'txt': require('../images/ic_txt.png'),
        'video':require('../images/ic_video.png')
    };


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
            const fileData = files.map(file => ({
                FileName: file.name,
                FilePath: file.uri,
                FileType: getFileType(file.name)
            }));
            setSelectedFile(prevFiles => [...prevFiles, ...fileData]);
            onFilePathsReceived(prevFiles => [...prevFiles, ...fileData]);
        }).catch((error) => {
            //console.log("Error in openFilePicker:", error);
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
                FileType: 'image',
                FileName: file.path.substring(file.path.lastIndexOf('/') + 1)
            }];
           
            setSelectedFile(prevFiles => [...prevFiles, ...fileData]);
            onFilePathsReceived(prevFiles => [...prevFiles, ...fileData]);
        }).catch(error => {
            //console.log("Error in TakeCamera:", error);
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
                const fileData = images.map((file: { path: string; mime: any; }) => ({
                    FilePath: file.path,
                    FileType: 'image',
                    FileName: file.path.substring(file.path.lastIndexOf('/') + 1)
                }));
                
                setSelectedFile(prevFiles => [...prevFiles, ...fileData]);
                onFilePathsReceived(prevFiles => [...prevFiles, ...fileData]);
            })
            .catch(error => {
                //console.log("Error selecting images:", error);
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

    const getFileType = (fileName) => {
        const extension = fileName.split('.').pop().toLowerCase();
        if (extension === 'pdf') return 'pdf';
        if (extension === 'doc' || extension === 'docx') return 'doc';
        if (extension === 'xls' || extension === 'xlsx') return 'xls';
        if (extension === 'txt') return 'txt';
        if (extension === 'jpg' || extension === 'jpeg' || extension === 'png' || extension === 'gif') return 'image';
        if (extension === 'mp4' || extension === 'mov' || extension === 'avi' || extension === 'mkv') return 'video';
        return 'unknown';
    };
    
    return (
        <View style={styles.uploadImagecontainer}>
            {selectedFile.map((file, index) => (
                <View key={index} style={styles.imageContainer}>
                  {file.FileType === 'image' ? (
                        <Image source={{ uri: file.FilePath }} style={styles.imagePreview} />
                    ) : (
                        <Image source={fileIcons[file.FileType]} style={styles.fileIcon} />
                    )}
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