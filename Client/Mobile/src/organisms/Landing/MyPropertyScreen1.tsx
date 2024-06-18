import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import TeamxRadioButton from '../../molecules/TeamxRadioButton';
import { secondaryColor, styles } from '../../styles/styles';
import TeamXButton from '../../atoms/TeamXButton';
import { useNavigation } from '@react-navigation/native'; 
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers/store';  
import { createProduct } from '../../reducers/Product/productSlice';

const MyPropertyScreen1 = () => {
    const navigation = useNavigation(); 
    const dispatch = useDispatch();

    const [propertyName, setPropertyName] = useState('');
    const [selectedSellerType, setSelectedSellerType] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('flats');
    const [items, setItems] = useState([
        { label: 'Company', value: 'company' },
        { label: 'Individual', value: 'individual' },
    ]);
    const [errorMessage, setErrorMessage] = useState('');

    const { isBusy, error, success } = useSelector((state: RootState) => state.product);

    const handleNextPress = () => {
        if (!propertyName || !selectedSellerType || !selectedOption) {
            setErrorMessage('Please fill out all fields');
            return;
        }

        const productData = {
            projectName: propertyName,
            propertySeller: selectedSellerType,
            propertyType: selectedOption,
            dynamic_properties: [], // Add any dynamic properties here
            owner_id: 3, // Replace with actual owner ID
        };

        dispatch(createProduct(productData));
        setErrorMessage('');
    };

    const handleBackPress = () => {
        navigation.goBack(); 
    };

    return (
        <View style={styles.MyPropertyScreen1container}>
            <View style={styles.MyPropertyScreen1header}>
                <TouchableOpacity onPress={handleBackPress}>
                    <Image source={require('../../images/ic_back.png')} style={styles.backArrow} />
                </TouchableOpacity>
                <Text style={styles.MyPropertyScreen1heading}>My Property</Text>
            </View>
            <View style={styles.MyPropertyScreen1line} />

            <TextInput
                style={styles.MyPropertyScreen1input}
                placeholder="Property Name"
                placeholderTextColor="white"
                value={propertyName}
                onChangeText={setPropertyName}
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
                        value="flats"
                        label="Flats"
                        selectedOption={selectedOption}
                        secondaryColor={secondaryColor}
                        setSelectedOption={setSelectedOption}
                    />
                </View>
                <View style={{ marginBottom: 15 }}>
                    <TeamxRadioButton
                        value="openplots"
                        label="Open Plots"
                        selectedOption={selectedOption}
                        secondaryColor={secondaryColor}
                        setSelectedOption={setSelectedOption}
                    />
                </View>
                <TeamxRadioButton
                    value="villas"
                    label="Villas"
                    selectedOption={selectedOption}
                    secondaryColor={secondaryColor}
                    setSelectedOption={setSelectedOption}
                />
            </View>

            <View style={styles.MyPropertyScreen1buttonContainer}>
                <TeamXButton onPress={handleNextPress} text="Next" />
            </View>

            {errorMessage ? <Text style={{ color: 'red' }}>{errorMessage}</Text> : null}
            {isBusy && <Text>Loading...</Text>}
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
            {success && <Text style={{ color: 'green' }}>Operation Successful!</Text>}
        </View>
    );
};

export default MyPropertyScreen1;
