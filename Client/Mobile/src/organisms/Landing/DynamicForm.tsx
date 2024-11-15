import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Platform, Alert, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers/store';
import { getPropertyType } from '../../reducers/Product/productSlice';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import CheckBox from 'react-native-check-box';
import Geolocation from 'react-native-geolocation-service';
import { request, PERMISSIONS } from 'react-native-permissions';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
const DynamicForm = ({ route }) => {
  const { propertyType } = route.params;
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.product.formdata);
  const [formState, setFormState] = useState<Record<string, any>>({});
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [currentDateField, setCurrentDateField] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    dispatch(getPropertyType(propertyType));
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

    if (name === 'state') {
      const selectedStateId = formData.location.find(item => item.name === 'state')?.options.find(option => option.value === value)?.id;
      const cities = formData.location.find(item => item.name === 'city')?.options.filter(option => option.parent_id === selectedStateId) || [];
      setFilteredCities(cities);
      setFormState(prevState => ({
        ...prevState,
        city: '',
      }));
    }
  };

  const handleSubmit = () => {
    console.log(formState);
  };

  const requestLocationPermission = async () => {
    try {
      const granted = await request(
        Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
      return granted === 'granted';
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const captureLocation = async () => {
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) {
      Alert.alert('Permission Denied', 'Location permission is required to capture your location.');
      return;
    }

    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setFormState((prevState) => ({
          ...prevState,
          latitude: latitude.toString(),
          longitude: longitude.toString(),
        }));
      },
      (error) => {
        Alert.alert('Error', 'Unable to retrieve your location.');
        console.error(error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const renderInputField = (item) => {
    if (!formData) {
      return null;
    }

    switch (item.input_type) {
      case 'checkbox':
        return (
          <View key={item.id} style={styles.checkboxContainer}>
            <CheckBox
              isChecked={formState[item.name]}
              onClick={() => handleChange(item.name, !formState[item.name], item.input_type)}
              checkBoxColor="white"
              style={styles.checkbox}
            />
            <Text style={styles.checkboxLabel}>{item.name}</Text>
            <View style={{ width: 20 }} />
          </View>
        );
      case 'text_box':
        return (
          <View key={item.id} style={{ marginBottom: 10 }}>
            <Text style={[styles.label, { color: 'white' }]}>{item.name}</Text>
            <TextInput
              style={styles.textInput}
              value={formState[item.name]}
              onChangeText={(value) => handleChange(item.name, value, item.input_type)}
            />
          </View>
        );
      case 'dropdown':
        return (
          <View key={item.id} style={{ marginBottom: 10 }}>
            <Text style={[styles.label, { color: 'white' }]}>{item.name}</Text>
            <Picker
              selectedValue={formState[item.name]}
              onValueChange={(value) => handleChange(item.name, value, item.input_type)}
              style={styles.picker}
              itemStyle={styles.pickerItem}
            >
              {item.name === 'city' && filteredCities.length > 0
                ? filteredCities.map(option => (
                  <Picker.Item key={option.id} label={option.name} value={option.name} />
                ))
                : item.options.map(option => (
                  <Picker.Item key={option.id} label={option.value} value={option.value} />
                ))}
            </Picker>
          </View>
        );
      case 'radio_button':
        return (
          <View key={item.id} style={{ marginBottom: 10 }}>
            <Text style={[styles.label, { color: 'white' }]}>{item.name}</Text>
          </View>
        );
      case 'date':
        return (
          <View key={item.id} style={{ marginBottom: 10, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[styles.label, { color: 'white', marginRight: 10 }]}>{item.name}</Text>
            <TextInput
              style={[styles.textInput, { flex: 1, width: '60%' }]}
              value={formState[item.name]}
              onChangeText={(value) => handleChange(item.name, value, item.input_type)}
              placeholder="Select Date"
              placeholderTextColor="gray"
              editable={false}
            />
            <TouchableOpacity onPress={() => {
              setShowDatePicker(true);
              setCurrentDateField(item.name);
            }}>
              <Image source={require('../../images/calendar.png')} style={styles.calendarIcon} />
            </TouchableOpacity>
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
            <Text style={[styles.label, { color: 'white' }]}>{item.name}</Text>
            <Button title="Upload File" onPress={() => { }} />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>Amenities</Text>
      {formData?.amenities?.map(renderInputField)}
      <Text style={styles.sectionTitle}>Location</Text>
      {formData?.location?.map(renderInputField)}
      <View style={{ marginBottom: 20 }}>
        <TouchableOpacity onPress={captureLocation}>
          <LinearGradient
            colors={['#888693', '#35314A']}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Capture Location</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Possession</Text>
      {formData?.possession?.map(renderInputField)}
      <Text style={styles.sectionTitle}>Properties</Text>
      {formData?.properties?.map(renderInputField)}
      <View style={{ marginBottom: 20 }}>
        <TouchableOpacity onPress={handleSubmit}>
          <LinearGradient
            colors={['#888693', '#35314A']}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#272239',
    padding: 20,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxLabel: {
    color: 'white',
  },
  label: {
    color: 'white',
    marginBottom: 5,
    fontSize: 18,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#35314A',
    color: 'white',
    padding: Platform.OS === 'ios' ? 10 : 5,
  },
  picker: {
    color: 'white',
  },
  pickerItem: {
    color: 'white',
  },
  button: {
    width: 220,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  calendarIcon: {
    width: 30,
    height: 30,
    tintColor: 'white',  // Adjust this if you want to change the icon color
    marginLeft: 10,
  },
});

export default DynamicForm;
