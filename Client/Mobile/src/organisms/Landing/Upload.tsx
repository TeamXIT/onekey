import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Alert, SafeAreaView } from "react-native"; // Import Image component
import { ScrollView } from "react-native-gesture-handler";
import { RadioButton } from "react-native-paper";
import TeamxImageComponent from "../../molecules/TeamxImageComponent";
import { secondaryColor, styles } from "../../styles/styles";
import TeamxRadioButton from "../../molecules/TeamxRadioButton";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { createNewProduct } from "../../reducers/Projects/projectSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Upload = () => {
    const dispatch = useAppDispatch();
    const [showAdditionalTextBox, setShowAdditionalTextBox] = useState(false);
    const [ProjectText, setProjectText] = useState("");
    const [selectedOption, setSelectedOption] = useState("Text");
    const [dynamicProps, setDynamicProps] = useState([]);
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [imagePaths, setImagePaths] = useState([]);

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
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Delete", onPress: () => deleteFile(index) }
            ]
        );
    };

    const deleteFile = (index) => {
        const updatedProject = [...dynamicProps];
        const item = updatedProject[index];
        console.log("File Item: ", item);
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

            AsyncStorage.getItem('AuthToken').then(async (value) => {
                const userId = await jwt_decode(value).user_id;
                console.log("UserId: ", userId);
                dispatch(createNewProduct(uploadData, userId));
            });
        }
    };

    return (
        <SafeAreaView style={styles.UploadContainer}>
            <ScrollView style={{ padding: 15, flex: 9 }}>
                <View >
                    <Text style={styles.UploadText}>Project Name</Text>
                    <TextInput style={styles.uploadTitleTextInput}
                        placeholder="Enter project name"
                        value={projectName}
                        onChangeText={setProjectName} />
                    <Text style={styles.UploadText}>Project Description</Text>
                    <TextInput
                        style={styles.uploadDescriptionTextInput}
                        multiline
                        placeholder="Enter project description"
                        value={projectDescription}
                        onChangeText={setProjectDescription}
                    />
                    <TouchableOpacity style={styles.Uploadbutton} onPress={handleAddFile}>
                        <Text style={styles.AddLabelText}>Add More Details</Text>
                    </TouchableOpacity>
                    {showAdditionalTextBox && (
                        <View style={styles.LabelTextBoxContainer}>
                            <Text style={styles.labelText}>Title</Text>
                            <TextInput
                                style={styles.uploadTitleTextInput}
                                placeholder="Enter title"
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
                            <TouchableOpacity style={styles.AddButton} onPress={handleSaveFile}>
                                <Text style={styles.AddButtonText}>Add</Text>
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
                                    style={styles.uploadDescriptionTextInput}
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
                style={styles.uploadBtn}
                onPress={() => {
                    Alert.alert("Upload Alert", "Do you want to upload?", [
                        {
                            text: "OK", onPress: () => {
                                handleUpload();
                            }
                        }
                    ]);
                }}>
                <Text style={styles.uploadButtonText}>UPLOAD</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}


export default Upload;
function jwt_decode(value: string | null) {
    throw new Error("Function not implemented.");
}

