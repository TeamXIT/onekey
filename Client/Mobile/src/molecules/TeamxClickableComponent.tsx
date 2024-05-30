import React, { useState } from "react";
import { View, Image, TouchableOpacity, Alert, Platform, Modal, Text } from "react-native";
import ImagePicker from 'react-native-image-crop-picker';
import DocumentPicker from 'react-native-document-picker';
import { WebView } from 'react-native-webview';
import RNFS from 'react-native-fs';
import { styles } from "../styles/styles";

const SavePath = Platform.OS === 'ios' ? RNFS.MainBundlePath : RNFS.DocumentDirectoryPath;

const TeamxClickableComponent = ({ image, onFilePathsReceived }) => {
    const [selectedFile, setSelectedFile] = useState([]);
    const [isWebViewVisible, setWebViewVisible] = useState(false);
    const [webViewSource, setWebViewSource] = useState('');

    const fileIcons = {
        'pdf': require('../images/ic_pdf.png'),
        'doc': require('../images/ic_doc.png'),
        'docx': require('../images/ic_word.png'),
        'xls': require('../images/ic_xls.png'),
        'txt': require('../images/ic_txt.png'),
        'image': require('../images/ic_doc.png') // Changed to a specific image icon
    };

    const openSelectPicker = () => {
        Alert.alert(
            "",
            "Select Picker",
            [
                {
                    text: "Select File",
                    onPress: () => openFilePicker()
                },
                {
                    text: "Take Picture",
                    onPress: () => OpenCamera()
                },
                {
                    text: "Select Picture",
                    onPress: () => openImagePicker()
                },
            ]
        );
    };

    const openFilePicker = async () => {
        try {
            const files = await DocumentPicker.pick({
                type: [
                    DocumentPicker.types.pdf,
                    DocumentPicker.types.images,
                    DocumentPicker.types.plainText,
                    DocumentPicker.types.doc,
                    DocumentPicker.types.docx,
                    DocumentPicker.types.xlsx
                ],
                allowMultiSelection: true
            });
            const fileData = files.map(file => ({
                FileName: file.name,
                FilePath: file.uri,
                FileType: getFileType(file.name)
            }));
            setSelectedFile(prevFiles => [...prevFiles, ...fileData]);
            onFilePathsReceived(prevFiles => [...prevFiles, ...fileData]);
        } catch (error) {
            if (!DocumentPicker.isCancel(error)) {
                console.error("Error in openFilePicker:", error);
            }
        }
    };

    const OpenCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: false,
            multiple: false,
            mediaType: "photo",
        }).then((file) => {
            const fileData = [{
                FilePath: file.path,
                FileType: 'image',
                FileName: file.path.substring(file.path.lastIndexOf('/') + 1)
            }];
            setSelectedFile(prevFiles => [...prevFiles, ...fileData]);
            onFilePathsReceived(prevFiles => [...prevFiles, ...fileData]);
        }).catch(error => {
            console.error("Error in OpenCamera:", error);
        });
    };

    const openImagePicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: false,
            multiple: true,
        }).then(images => {
            const fileData = images.map(file => ({
                FilePath: file.path,
                FileType: 'image',
                FileName: file.path.substring(file.path.lastIndexOf('/') + 1)
            }));
            setSelectedFile(prevFiles => [...prevFiles, ...fileData]);
            onFilePathsReceived(prevFiles => [...prevFiles, ...fileData]);
        }).catch(error => {
            console.error("Error selecting images:", error);
        });
    };

    const handleDeleteImage = (index) => {
        Alert.alert(
            "Confirmation",
            "Are you sure you want to delete this file?",
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
        if (['jpg', 'jpeg', 'png', 'gif'].includes(extension)) return 'image';
        return 'unknown';
    };

    const openDocument = async (file) => {
        try {
            console.log(file);
            setWebViewSource('https://www.mass.gov/doc/andys-test-for-url-issue-0/download');
            setWebViewVisible(true);
        } catch (error) {
            console.error("Error opening document:", error);
            Alert.alert("Error", "Unable to open the document. Please try again.");
        }
    };

    return (
        <View style={styles.uploadImagecontainer}>
            {selectedFile.map((file, index) => (
                <TouchableOpacity key={index} onPress={() => openDocument(file)}>
                    <View style={styles.imageContainer}>
                        {file.FileType === 'image' ? (
                            <Image source={{ uri: file.FilePath }} style={styles.imagePreview} />
                        ) : (
                            <Image source={fileIcons[file.FileType]} style={styles.fileIcon} />
                        )}
                        <TouchableOpacity onPress={() => handleDeleteImage(index)} style={styles.deleteButton}>
                            <Image source={require('../images/ic_delete.png')} style={styles.deleteButtonText} />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={openSelectPicker} style={styles.uploadButtonStyle}>
                <Image source={require('../../src/images/ic_upload.png')} />
            </TouchableOpacity>

            <Modal
                visible={isWebViewVisible}
                onRequestClose={() => setWebViewVisible(false)}
                transparent={false}
                animationType="slide"
            >
                <View style={styles.webViewContainer}>
                    <TouchableOpacity onPress={() => setWebViewVisible(false)} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                    <WebView
                        source={{ uri: webViewSource }}
                        style={styles.webView}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        startInLoadingState={true}
                    />
                </View>
            </Modal>
        </View>
    );
};

export default TeamxClickableComponent;
