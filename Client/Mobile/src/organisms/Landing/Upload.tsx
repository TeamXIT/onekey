import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Alert, SafeAreaView } from "react-native"; // Import Image component
import { ScrollView } from "react-native-gesture-handler";
import { RadioButton } from "react-native-paper";
import TeamxImageComponent from "../../molecules/TeamxImageComponent";
import { secondaryColor, styles } from "../../styles/styles";
import TeamxRadioButton from "../../molecules/TeamxRadioButton";


const Upload = () => {
    const [showAdditionalTextBox, setShowAdditionalTextBox] = useState(false);
    const [labelText, setLabelText] = useState("");
    const [selectedOption, setSelectedOption] = useState("Text");
    const [labels, setLabels] = useState([]);
    const [additionalText, setAdditionalText] = useState("");
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [imagePaths, setImagePaths] = useState([]);

    const handleAddLabel = () => {
        let isVisible = showAdditionalTextBox;
        setShowAdditionalTextBox(isVisible = !isVisible);
    };

    const handleSaveLabel = () => {
        if (labelText.trim() === "") {
            Alert.alert(
                "Invalid detailing",
                "Please enter title",
                [{ text: "OK", onPress: () => {}}]
            );
            return;
        }

        const fileTypes = labels.filter(x => x.type === "File")
        if(fileTypes != null && fileTypes.length >= 1 && selectedOption === "File")
        {
            Alert.alert(
                "Oops!...",
                "We alredy have files included, select another type.",
                [{ text: "OK", onPress: () => {}}]
            );
        }
        else{
            setLabels([...labels, { text: labelText, type: selectedOption }]);
            setShowAdditionalTextBox(false);
            setLabelText("");
        }
    };

    const handleDeleteLabel = (index) => {
        Alert.alert(
            "Delete Confirmation",
            "Are you sure you want to delete this?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Delete", onPress: () => deleteLabel(index) }
            ]
        );
    };

    const deleteLabel = (index) => {
        const updatedLabels = [...labels];
        updatedLabels.splice(index, 1);
        setLabels(updatedLabels);
    };

    const handleReceiveImagePaths = (paths) => {
        setImagePaths(paths);
    };

    const handleUpload = () => {
        console.log("Project Name:", projectName);
        console.log("Project Description:", projectDescription);
        console.log("Labels");
        labels.forEach((label, index) => {
            console.log("Text:", label.text);
            console.log("Type:", label.type);
            if (label.type === "Text") {
                console.log("Additional Text:", additionalText);
            }
            else {
                console.log("Image Paths:", imagePaths);
            }
        });

        // let assetsData: [{
        //     name: string,
        //     value_type: string,
        //     value: string
        // }];
        // let dynamicData: [{
        //     name: string,
        //     value_type: string,
        //     value: string
        // }];
        // imagePaths.forEach(file => {
        //     assetsData.push({
        //         name: file.Name,
        //         value_type: file.Filetype,
        //         value: file.FilePath
        //     })
        // });
        // labels.forEach(label => {
        //     dynamicData.push({
        //         name: label.text,
        //         value_type: "string",
        //         value: label.additionalText
        //     })
        // });

        // let uploadData = {
        //     name: projectName,
        //     description: projectDescription,
        //     assets : assetsData,
        //     dynamic_properties: dynamicData
        // };

        // console.log("Project Data: ", uploadData);

        setLabels([]);
        setAdditionalText("");
        setImagePaths([]);
        setProjectName("");
        setProjectDescription("");
    };

    return (
        <ScrollView style={styles.UploadContainer}>
            <SafeAreaView>
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
                    <TouchableOpacity style={styles.Uploadbutton} onPress={handleAddLabel}>
                        <Text style={styles.AddLabelText}>Add More Details</Text>
                    </TouchableOpacity>
                    {showAdditionalTextBox && (
                        <View style={styles.LabelTextBoxContainer}>
                            <Text style={styles.labelText}>Title</Text>
                            <TextInput
                                style={styles.uploadTitleTextInput}
                                placeholder="Enter title"
                                onChangeText={(text) => setLabelText(text)}
                                value={labelText}
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
                            <TouchableOpacity style={styles.AddButton} onPress={handleSaveLabel}>
                                <Text style={styles.AddButtonText}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    {labels.map((label, index) => (
                        <View style={styles.displayedLabelContainer} key={index}>
                            <TouchableOpacity onPress={() => handleDeleteLabel(index)} style={styles.deleteIcon}>
                                <Image source={require('../../images/ic_delete.png')} />
                            </TouchableOpacity>
                            <Text style={styles.uploadTitleText}>
                                {label.text}
                            </Text>
                            {label.type === "Text" && (
                                <TextInput
                                    style={styles.uploadDescriptionTextInput}
                                    placeholder="Enter Text"
                                    onChangeText={(text) => setAdditionalText(text)}
                                    multiline
                                    numberOfLines={10}
                                />
                            )}
                            {label.type === "File" && (
                                <View style={styles.fileButton}>
                                    <TeamxImageComponent image={'../../src/images/ic_upload.png'} onImagePathsReceived={handleReceiveImagePaths} />
                                </View>
                            )}
                        </View>
                    ))}
                </View>

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
                    }}
                >
                    <Text style={styles.uploadButtonText}>UPLOAD</Text>
                </TouchableOpacity>

            </SafeAreaView>
        </ScrollView>

    );
}


export default Upload;
