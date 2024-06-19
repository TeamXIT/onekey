import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers/store';
import { getPropertyType } from '../../reducers/Product/productSlice';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import CheckBox from 'react-native-check-box';
import Geolocation from '@react-native-community/geolocation';
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';

const DynamicForm = ({ route }) => {
    const { propertyType } = route.params;
    const dispatch = useDispatch();
    const formData = useSelector((state: RootState) => state.product.formdata);
    const [formState, setFormState] = useState({});
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [currentDateField, setCurrentDateField] = useState('');

    useEffect(() => {
        dispatch(getPropertyType(propertyType)); // Use propertyType received from params
    }, [dispatch, propertyType]);

    useEffect(() => {
        const initialState = {};
    
        const parseData = (data) => {
            if (data) {
                data.forEach(item => {
                    if (item.input_type === 'checkbox') {
                        initialState[item.name] = item.value || false;
                    } else if (['text_box', 'dropdown', 'radio_button', 'date', 'location'].includes(item.input_type)) {
                        initialState[item.name] = '';
                    } else if (item.input_type === 'file') {
                        initialState[item.name] = null;
                    }
                });
            }
        };
    
        parseData(formData?.amenities);
        parseData(formData?.location);
        parseData(formData?.possession);
        parseData(formData?.properties);
    
        setFormState(initialState);
    }, [formData]);

    const handleChange = (name, value, inputType) => {
        setFormState(prevState => ({
            ...prevState,
            [name]: inputType === 'checkbox' ? value : value,
        }));
    };

    const handleLocationCapture = async (name) => {
        const permission = await requestLocationPermission();
        if (permission) {
            Geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    handleChange(name, `${latitude}, ${longitude}`, 'location');
                },
                (error) => {
                    Alert.alert('Error', 'Unable to get location. Please try again.');
                    console.error(error);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        }
    };

    const requestLocationPermission = async () => {
        try {
            const result = await check(
                Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
            );

            if (result === RESULTS.GRANTED) {
                return true;
            }

            const requestResult = await request(
                Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
            );

            return requestResult === RESULTS.GRANTED;
        } catch (error) {
            console.error('Failed to request location permission', error);
            return false;
        }
    };

    const handleSubmit = () => {
        console.log(formState);
        // Implement form submission logic here
    };

    const renderInputField = (item) => {
        if (!formData) {
            return null; // Handle case where formData is not defined yet
        }
    
        switch (item.input_type) {
            case 'checkbox':
                return (
                    <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <CheckBox
                            isChecked={formState[item.name]}
                            onClick={(value) => handleChange(item.name, !formState[item.name], item.input_type)}
                        />
                        <Text style={{ marginLeft: 10 }}>{item.name}</Text>
                    </View>
                );
            case 'text_box':
                return (
                    <View key={item.id} style={{ marginBottom: 10 }}>
                        <Text>{item.name}</Text>
                        <TextInput
                            style={{ borderWidth: 1, padding: 5 }}
                            value={formState[item.name]}
                            onChangeText={(value) => handleChange(item.name, value, item.input_type)}
                        />
                    </View>
                );
            case 'dropdown':
                return (
                    <View key={item.id} style={{ marginBottom: 10 }}>
                        <Text>{item.name}</Text>
                        <Picker
                            selectedValue={formState[item.name]}
                            onValueChange={(value) => handleChange(item.name, value, item.input_type)}>
                            {item.options.map(option => (
                                <Picker.Item key={option} label={option} value={option} />
                            ))}
                        </Picker>
                    </View>
                );
            case 'radio_button':
                return (
                    <View key={item.id} style={{ marginBottom: 10 }}>
                        <Text>{item.name}</Text>
                        {/* Implement radio button rendering */}
                    </View>
                );
            case 'date':
                return (
                    <View key={item.id} style={{ marginBottom: 10 }}>
                        <Text>{item.name}</Text>
                        <Button
                            title={formState[item.name] || "Select Date"}
                            onPress={() => {
                                setShowDatePicker(true);
                                setCurrentDateField(item.name);
                            }}
                        />
                        {showDatePicker && currentDateField === item.name && (
                            <DateTimePicker
                                value={new Date()}
                                mode="date"
                                display="default"
                                onChange={(event, date) => {
                                    setShowDatePicker(false);
                                    if (date) {
                                        handleChange(item.name, date.toISOString().split('T')[0], item.input_type);
                                    }
                                }}
                            />
                        )}
                    </View>
                );
            case 'file':
                return (
                    <View key={item.id} style={{ marginBottom: 10 }}>
                        <Text>{item.name}</Text>
                        <Button title="Upload File" onPress={() => { /* Implement file upload */ }} />
                    </View>
                );
            case 'location':
                return (
                    <View key={item.id} style={{ marginBottom: 10 }}>
                        <Text>{item.name}</Text>
                        <Button title="Capture Location" onPress={() => handleLocationCapture(item.name)} />
                        <Text>{formState[item.name]}</Text>
                    </View>
                );
            default:
                return null;
        }
    };

    return (
        <ScrollView contentContainerStyle={{ padding: 20 }}>
            <Text>Amenities</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {formData?.amenities?.map((item, index) => (
                    <View key={item.id} style={{ width: '50%', paddingHorizontal: 5 }}>
                        {renderInputField(item)}
                    </View>
                ))}
            </View>
            <Text>Location</Text>
            {formData?.location?.map(renderInputField)}
            <Text>Possession</Text>
            {formData?.possession?.map(renderInputField)}
            <Text>Properties</Text>
            {formData?.properties?.map(renderInputField)}
            <Button title="Submit" onPress={handleSubmit} />
        </ScrollView>
    );
};

export default DynamicForm;
