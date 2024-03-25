import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Alert, SafeAreaView } from "react-native"; // Import Image component
import { ScrollView } from "react-native-gesture-handler";
import { RadioButton } from "react-native-paper";
import TeamxImageComponent from "../../molecules/TeamxImageComponent";
import { secondaryColor, styles } from "../../styles/styles"

const Upload = () => {
    const [showAdditionalTextBox, setShowAdditionalTextBox] = useState(false);
    const [labelText, setLabelText] = useState("");
    const [selectedOption, setSelectedOption] = useState("Text");
    const [labels, setLabels] = useState([]);
    const [additionalText, setAdditionalText] = useState("");

    const handleAddLabel = () => {
        let isVisible = showAdditionalTextBox;
        setShowAdditionalTextBox(isVisible = !isVisible);
    };

    const handleSaveLabel = () => {
        setLabels([...labels, { text: labelText, type: selectedOption }]);
        setShowAdditionalTextBox(false);
        setLabelText(""); // Clear the input after saving
    };

    const handleDeleteLabel = (index) => {
        const updatedLabels = [...labels];
        updatedLabels.splice(index, 1);
        setLabels(updatedLabels);
    };

    return (

        <ScrollView style={styles.UploadContainer}>
            <SafeAreaView>
                <View >
                    <Text style={styles.UploadText}>Project Name</Text>
                    <TextInput style={styles.uploadTitleTextInput} placeholder="Enter project name" />
                    <Text style={styles.UploadText}>Project Description</Text>
                    <TextInput
                        style={styles.uploadDescriptionTextInput}
                        multiline
                        numberOfLines={10}
                        placeholder="Enter project description"
                    />
                    <TouchableOpacity style={styles.Uploadbutton} onPress={handleAddLabel}>
                        <Text style={styles.AddLabelText}>Add Label</Text>
                    </TouchableOpacity>
                    {showAdditionalTextBox && (
                        <View style={styles.LabelTextBoxContainer}>
                            <Text style={styles.labelText}>Label</Text>
                            <TextInput
                                style={styles.uploadTitleTextInput}
                                placeholder="Enter label text"
                                onChangeText={(text) => setLabelText(text)}
                                value={labelText}
                            />
                            <Text style={[styles.labelText, { alignSelf: "center" }]}>Select your Label Type</Text>
                            <View style={[styles.radioButtonsContainer, { alignSelf: "center" }]}>
                                <View style={styles.radioButtonRow}>
                                    <RadioButton
                                        value="Text"
                                        color={secondaryColor}
                                        uncheckedColor={secondaryColor}
                                        status={selectedOption === 'Text' ? 'checked' : 'unchecked'}
                                        onPress={() => setSelectedOption('Text')}
                                    />
                                    <Text style={styles.radioButtonLabel}>Text</Text>
                                </View>
                                <View style={styles.radioButtonRow}>
                                    <RadioButton
                                        value="File"
                                        color={secondaryColor}
                                        uncheckedColor={secondaryColor}
                                        status={selectedOption === 'File' ? 'checked' : 'unchecked'}
                                        onPress={() => setSelectedOption('File')}
                                    />
                                    <Text style={styles.radioButtonLabel}>File</Text>
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
                            <Text style={[styles.labelText, { alignSelf: "center" }]}>
                                {label.text}
                            </Text>
                            {label.type === "Text" && (
                                <TextInput
                                    style={styles.uploadDescriptionTextInput}
                                    placeholder="Enter Text"
                                    onChangeText={(text) => setAdditionalText(text)}
                                />
                            )}
                            {label.type === "File" && (

                                <View style={styles.fileButton}>
                                    <TeamxImageComponent image={'../../src/images/ic_upload.png'} />
                                </View>
                            )}
                        </View>
                    ))}
                </View>

                <TouchableOpacity style={styles.uploadBtn} onPress={() => Alert.alert("Upload Alert", "Do you want to upload?", [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ])}>
                    <Text style={styles.uploadButtonText}>UPLOAD</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>

    );
}


export default Upload;
