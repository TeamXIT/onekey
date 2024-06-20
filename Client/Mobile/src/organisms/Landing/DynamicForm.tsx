import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, Alert, Platform, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers/store';
import { getPropertyType } from '../../reducers/Product/productSlice';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import CheckBox from 'react-native-check-box';
import Geolocation from '@react-native-community/geolocation';
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import TeamXButton from '../../atoms/TeamXButton'; // Adjust the import path as necessary
import Icon from 'react-native-vector-icons/FontAwesome';

interface RouteParams {
  propertyType: string;
}

interface Props {
  route: { params: RouteParams };
}

interface FormDataItem {
  id: string;
  name: string;
  input_type: string;
  value?: any;
  options?: string[];
}

const DynamicForm: React.FC<Props> = ({ route }) => {
  const { propertyType } = route.params;
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.product.formdata);
  const [formState, setFormState] = useState<Record<string, any>>({});
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [currentDateField, setCurrentDateField] = useState('');

  useEffect(() => {
    dispatch(getPropertyType(propertyType));
  }, [dispatch, propertyType]);

  useEffect(() => {
    const initialState: Record<string, any> = {};

    const parseData = (data: FormDataItem[]) => {
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

    parseData(formData?.amenities || []);
    parseData(formData?.location || []);
    parseData(formData?.possession || []);
    parseData(formData?.properties || []);

    setFormState(initialState);
  }, [formData]);

  const handleChange = (name: string, value: any, inputType: string) => {
    setFormState(prevState => ({
      ...prevState,
      [name]: inputType === 'checkbox' ? value : value,
    }));
  };

  const handleLocationCapture = async (name: string) => {
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

  const renderInputField = (item: FormDataItem) => {
    if (!formData) {
      return null;
    }

    switch (item.input_type) {
      case 'checkbox':
        return (
          <View key={item.id} style={styles.inputContainer}>
            <CheckBox
              isChecked={formState[item.name]}
              onClick={() => handleChange(item.name, !formState[item.name], item.input_type)}
            />
            <Text style={styles.label}>{item.name}</Text>
          </View>
        );
      case 'text_box':
        return (
          <View key={item.id} style={styles.inputContainer}>
            <Text style={styles.label}>{item.name}</Text>
            <TextInput
              style={styles.textInput}
              value={formState[item.name]}
              onChangeText={(value) => handleChange(item.name, value, item.input_type)}
            />
          </View>
        );
      case 'dropdown':
        return (
          <View key={item.id} style={styles.inputContainer}>
            <Text style={styles.label}>{item.name}</Text>
            <Picker
              selectedValue={formState[item.name]}
              onValueChange={(value) => handleChange(item.name, value, item.input_type)}
              style={styles.picker}
              itemStyle={styles.pickerItem}
            >
              {item.options?.map(option => (
                <Picker.Item key={option} label={option} value={option} />
              ))}
            </Picker>
          </View>
        );
      case 'radio_button':
        return (
          <View key={item.id} style={styles.inputContainer}>
            <Text style={styles.label}>{item.name}</Text>
            {/* Implement radio button rendering */}
          </View>
        );
      case 'date':
        return (
          <View key={item.id} style={styles.inputContainer}>
            <Text style={styles.label}>{item.name}</Text>
            <TeamXButton
              text={formState[item.name] || "Select Date"}
              onPress={() => {
                setShowDatePicker(true);
                setCurrentDateField(item.name);
              }}
            >
              <Icon name="calendar" size={20} color="#fff" />
            </TeamXButton>
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
          <View key={item.id} style={styles.inputContainer}>
            <Text style={styles.label}>{item.name}</Text>
            <TeamXButton text="Upload File" onPress={() => { /* Implement file upload */ }} />
          </View>
        );
      case 'location':
        return (
          <View key={item.id} style={styles.inputContainer}>
            <Text style={styles.label}>{item.name}</Text>
            <TeamXButton text="Capture Location" onPress={() => handleLocationCapture(item.name)} />
            <Text style={styles.locationText}>{formState[item.name]}</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>Amenities</Text>
      <View style={styles.row}>
        {formData?.amenities?.map((item) => (
          <View key={item.id} style={styles.halfWidth}>
            {renderInputField(item)}
          </View>
        ))}
      </View>
      <Text style={styles.sectionTitle}>Location</Text>
      {formData?.location?.map(renderInputField)}
      <Text style={styles.sectionTitle}>Possession</Text>
      {formData?.possession?.map(renderInputField)}
      <Text style={styles.sectionTitle}>Properties</Text>
      {formData?.properties?.map(renderInputField)}
      <TeamXButton text="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#272239',
      padding: 20,
    },
    sectionTitle: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    inputContainer: {
      marginBottom: 10,
    },
    inputLabel: {
      color: 'white',
      marginBottom: 5,
    },
    textInput: {
      borderWidth: 1,
      padding: 5,
      borderColor: '#35314A',
      backgroundColor: '#35314A',
      color: 'white',
    },
    picker: {
      borderWidth: 1,
      borderColor: '#35314A',
      backgroundColor: '#35314A',
      color: 'white',
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    checkboxLabel: {
      marginLeft: 10,
      color: 'white',
    },
    locationText: {
      color: 'white',
      marginTop: 5,
    },
    dateButton: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#35314A',
      borderRadius: 5,
    },
    dateButtonText: {
      color: 'white',
      marginLeft: 10,
    },
    buttonContainer: {
      marginTop: 20,
    },
  });
  
export default  DynamicForm;