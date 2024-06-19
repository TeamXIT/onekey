import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Switch, ScrollView, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers/store';
import { getPropertyType } from '../../reducers/Product/productSlice';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

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
                    } else if (['text_box', 'dropdown', 'radio_button', 'date'].includes(item.input_type)) {
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
                    <View key={item.id} style={{ marginBottom: 10 }}>
                        <Text>{item.name}</Text>
                        <Switch
                            value={formState[item.name]}
                            onValueChange={(value) => handleChange(item.name, value, item.input_type)}
                        />
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
            default:
                return null;
        }
    };
    
    return (
        <ScrollView contentContainerStyle={{ padding: 20 }}>
            <Text>Amenities</Text>
            {formData?.amenities?.map(renderInputField)}
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
