import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import TeamxRadioButton from '../../molecules/TeamxRadioButton';
import { secondaryColor,styles } from '../../styles/styles';
import TeamXButton from '../../atoms/TeamXButton';
import { useNavigation } from '@react-navigation/native'; 


const MyPropertyScreen1 = () => {
    const navigation = useNavigation(); 

    const [selectedSellerType, setSelectedSellerType] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Text");
    const [items, setItems] = useState([
        { label: 'Company', value: 'company' },
        { label: 'Individual', value: 'individual' },
    ]);

    const handleNextPress = () => {
        console.log('Next button pressed');
       
    };

    const handlebackPress = () => {
       
        navigation.goBack(); 
    };

    return (
        <View style={styles.MyPropertyScreen1container}>
            {/* Back arrow and heading */}
            <View style={styles.MyPropertyScreen1header}>
                <TouchableOpacity onPress={handlebackPress}>
                    <Image source={require('../../images/ic_back.png')} style={styles.backArrow} />
                </TouchableOpacity>
                <Text style={styles.MyPropertyScreen1heading}>My Property</Text>
            </View>
            <View style={styles.MyPropertyScreen1line} />

            <TextInput
                style={styles.MyPropertyScreen1input}
                placeholder="Property Name"
                placeholderTextColor="white"
            />

            <DropDownPicker
                open={open}
                value={selectedSellerType}
                items={items}
                setOpen={setOpen}
                setValue={setSelectedSellerType}
                setItems={setItems}
                style={styles.MyPropertyScreen1dropdown}
                placeholder="Property Seller (Company/Individual)"
                placeholderStyle={{ color: "white", fontSize: 15 }}
                dropDownContainerStyle={styles.MyPropertyScreen1dropdownContainer}
                labelStyle={{ color: 'white' }}
                listItemLabelStyle={{ color: 'white' }}
                arrowIconStyle={{ tintColor: 'white' }}
            />

            <Text style={styles.MyPropertyScreen1text}>Select Property Type</Text>
            <View style={{ flexDirection: 'column', left: 50 }}>
                <View style={{ marginBottom: 15 }}>
                    <TeamxRadioButton
                        value="Flats"
                        label="Flats"
                        selectedOption={selectedOption}
                        secondaryColor={secondaryColor}
                        setSelectedOption={setSelectedOption}
                    />
                </View>
                <View style={{ marginBottom: 15 }}>
                    <TeamxRadioButton
                        value="Open Plots"
                        label="Open Plots"
                        selectedOption={selectedOption}
                        secondaryColor={secondaryColor}
                        setSelectedOption={setSelectedOption}
                    />
                </View>
                <TeamxRadioButton
                    value="Villas"
                    label="Villas"
                    selectedOption={selectedOption}
                    secondaryColor={secondaryColor}
                    setSelectedOption={setSelectedOption}
                />
            </View>

            <View style={styles.MyPropertyScreen1buttonContainer}>
                <TeamXButton onPress={handleNextPress} text="Next" />
            </View>
        </View>
    );
};


export default MyPropertyScreen1;
