import React, { useEffect, useState } from "react";
import { Text, TextInput, View, TouchableOpacity, Image, Alert, SafeAreaView } from "react-native"; // Import Image component
import { ScrollView } from "react-native-gesture-handler";
import TeamxImageComponent from "../../molecules/TeamxImageComponent";
import { secondaryColor, styles } from "../../styles/styles";
import TeamxRadioButton from "../../molecules/TeamxRadioButton";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNewProduct } from "../../reducers/Product/productSlice";
import LinearGradient from 'react-native-linear-gradient';


const Upload = () => {
    const dispatch = useAppDispatch();
    const [showAdditionalTextBox, setShowAdditionalTextBox] = useState(false);
    const [ProjectText, setProjectText] = useState("");
    const [selectedOption, setSelectedOption] = useState("Text");
    const [dynamicProps, setDynamicProps] = useState([]);
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [imagePaths, setImagePaths] = useState([]);
    const authn = useAppSelector(state => state.auth)
    const product = useAppSelector(state => state.product);

    useEffect(() => {
        // setDynamicProps([]);
        // setImagePaths([]);
        // setProjectName("");
        // setProjectDescription("");
    }, [product.data.products])

    const checkValidations = () => {
        if (projectName === "") {
            Alert.alert(
                "Invalid Input",
                "Please enter project name",
                [{ text: "OK", onPress: () => { } }]
            );
            return false;
        }

        if (projectDescription === "") {
            Alert.alert(
                "Invalid Input",
                "Please enter project description",
                [{ text: "OK", onPress: () => { } }]
            );
            return false;
        }

        return true;
    }

    const handleAddFile = () => {
        if (checkValidations()) {
            let isVisible = showAdditionalTextBox;
            setShowAdditionalTextBox(isVisible = !isVisible);
        }
    };

    const handleSaveFile = () => {
        if (ProjectText.trim() === "") {
            Alert.alert(
                "Invalid detailing",
                "Please enter title",
                [{ text: "OK", onPress: () => { } }]
            );
            return;
        }

        const fileTypes = dynamicProps.filter(x => x.type === "File")
        if (fileTypes != null && fileTypes.length >= 1 && selectedOption === "File") {
            Alert.alert(
                "Oops!...",
                "We alredy have files included, select another type.",
                [{ text: "OK", onPress: () => { } }]
            );
        }
        else {
            setDynamicProps([...dynamicProps, { text: ProjectText, type: selectedOption, description: "" }]);
            setShowAdditionalTextBox(false);
            setProjectText("");
        }
    };

    const handleDeleteFile = (index) => {
        Alert.alert(
            "Delete Confirmation",
            "Are you sure you want to delete this?",
            [
                {
                    text: "Cancel",
                    //onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Delete", onPress: () => deleteFile(index) }
            ]
        );
    };

    const deleteFile = (index) => {
        const updatedProject = [...dynamicProps];
        const item = updatedProject[index];
        if (item.type === "File") {
            setImagePaths([]);
        }
        updatedProject.splice(index, 1);
        setDynamicProps(updatedProject);
    };

    const handleReceiveFilePaths = (paths) => {
        setImagePaths(paths);
    };

    const handleUpload = () => {
        if (checkValidations()) {
            let assetsData = [];
            let dynamicData = [];
            imagePaths.forEach(file => {
                assetsData.push({
                    name: file.FileName,
                    value_type: file.FileType,
                    value: file.FilePath
                });
            });
            dynamicProps.forEach(dynamicProp => {
                if (dynamicProp.type === "Text") {
                    dynamicData.push({
                        name: dynamicProp.text,
                        value_type: "string",
                        value: dynamicProp.description
                    });
                }
            });

            let uploadData = {
                name: projectName,
                description: projectDescription,
                assets: assetsData,
                dynamic_properties: dynamicData
            };

            AsyncStorage.getItem('AuthToken').then((value) => {
                if (value) {
                    AsyncStorage.getItem('userId').then((user_id) => {
                        try {
                            //const decodedToken = jwtDecode(value);
                            //console.log("Decoded token:", decodedToken);

                            dispatch(createNewProduct(uploadData, value, user_id));
                        } catch (error) {
                            console.error('Error decoding token:', error);
                        }
                    });
                }
            });
        }
    };

    return (
        <SafeAreaView style={styles.UploadContainer}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 10 }}>
                <View >
                    <Text style={styles.UploadText}>Project Name</Text>
                    <TextInput style={styles.uploadTitleTextInput}
                        placeholder="Enter project name"
                        placeholderTextColor={'#FFFFFF'}
                        value={projectName}
                        onChangeText={setProjectName} />
                    <Text style={styles.UploadText}>Project Description</Text>
                    <TextInput
                        style={styles.uploadDescriptionTextInput}
                        multiline
                        placeholder="Enter project description"
                        placeholderTextColor={'#FFFFFF'}
                        value={projectDescription}
                        onChangeText={setProjectDescription}
                    />
                    <TouchableOpacity style={{ justifyContent: 'center', alignSelf: 'center' }} onPress={() => { handleAddFile() }}>
                        <LinearGradient
                            colors={['#888693', '#35314A']}
                            start={{ x: 0.5, y: 0 }}
                            end={{ x: 0.5, y: 1 }}
                            style={styles.buttonStyle}
                        >
                            <Text style={styles.AddLabelText}>Add More Details</Text>
                        </LinearGradient>

                    </TouchableOpacity>
                    {showAdditionalTextBox && (
                        <View style={styles.LabelTextBoxContainer}>
                            <Text style={styles.labelText}>Title</Text>
                            <TextInput
                                style={styles.uploadTitleTextInput}
                                placeholder="Enter title"
                                placeholderTextColor={'#FFFFFF'}
                                onChangeText={(text) => setProjectText(text)}
                                value={ProjectText}
                            />

                            <Text style={styles.labelText}>Select your detail type</Text>
                            <View style={styles.radioButtonsContainer}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TeamxRadioButton
                                        value="Text"
                                        label="Text"
                                        selectedOption={selectedOption}
                                        secondaryColor={secondaryColor}
                                        setSelectedOption={setSelectedOption}
                                    />
                                    <TeamxRadioButton
                                        value="File"
                                        label="File"
                                        selectedOption={selectedOption}
                                        secondaryColor={secondaryColor}
                                        setSelectedOption={setSelectedOption}
                                    />
                                </View>
                            </View>
                            <TouchableOpacity onPress={handleSaveFile}>
                                <LinearGradient
                                    colors={['#888693', '#35314A']}
                                    start={{ x: 0.5, y: 0 }}
                                    end={{ x: 0.5, y: 1 }}
                                    style={{ height: 25, width: 80, borderRadius: 40, justifyContent: 'center', alignSelf: 'center' }}
                                >
                                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, paddingTop: 2 }}>Add</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    )}
                    {dynamicProps.map((project, index) => (
                        <View style={styles.displayedLabelContainer} key={index}>
                            <TouchableOpacity onPress={() => handleDeleteFile(index)} style={styles.deleteIcon}>
                                <Image source={require('../../images/ic_delete.png')} />
                            </TouchableOpacity>
                            <Text style={styles.uploadTitleText}>
                                {project.text}
                            </Text>
                            {project.type === "Text" && (
                                <TextInput
                                    style={styles.textDescriptionTextInput}
                                    placeholder="Enter Text"
                                    onChangeText={(text) => project.description = text}
                                    multiline />
                            )}
                            {project.type === "File" && (
                                <View style={styles.fileButton}>
                                    <TeamxImageComponent image={'../../src/images/ic_upload.png'} onFilePathsReceived={handleReceiveFilePaths} />
                                </View>

                            )}
                        </View>
                    ))}
                </View>
            </ScrollView>

            <TouchableOpacity
                
                onPress={() => {
                    Alert.alert("Upload Alert", "Do you want to upload?", [
                        {
                            text: "OK", onPress: () => {
                                handleUpload();
                            }
                        }
                    ]);
                }}>
                <LinearGradient
                    colors={['#888693', '#35314A']}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    style={styles.uploadBtn}
                >
                    <Text style={styles.uploadButtonText}>UPLOAD</Text>
                </LinearGradient>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Upload;
