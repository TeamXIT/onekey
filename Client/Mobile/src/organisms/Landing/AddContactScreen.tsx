import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  PermissionsAndroid,
  Alert,
  StyleSheet,
} from 'react-native';
import Contacts from 'react-native-contacts';
import { secondaryColor, styles } from "../../styles/styles";

const AddContactScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const requestWriteContactsPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
        {
          title: 'Contacts',
          message: 'This app would like to write to your contacts.',
          buttonPositive: 'Please accept bare mortal',
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const addContact = async () => {
    const permissionGranted = await requestWriteContactsPermission();
    if (!permissionGranted) {
      Alert.alert(
        'Permission Denied',
        'Write contacts permission is required to add contacts.'
      );
      return;
    }

    const newPerson = {
      phoneNumbers: [
        {
          label: 'mobile',
          number: number,
        },
      ],
      familyName: '',
      givenName: name,
    };

    Contacts.addContact(newPerson)
      .then(() => {
        Alert.alert('Success', 'Contact added successfully.');
        navigation.goBack();
      })
      .catch(error => {
        console.log('Error adding contact:', error);
        Alert.alert('Error', 'Failed to add contact.');
      });
  };

  return (
    <View style={styles.addContactcontainer}>
      {/* Header */}
      <View style={styles.addcontactheader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../images/ic_back.png')}
            style={styles.addcontactBackIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Add Contact Form */}
      <Text style={styles.addcontactTitle}>Add Contact</Text>
      <TextInput
        placeholder="Enter Name"
        placeholderTextColor={secondaryColor}
        value={name}
        onChangeText={txt => setName(txt)}
        style={styles.addcontactInput}
      />
      <TextInput
        placeholder="Enter Mobile"
        placeholderTextColor={secondaryColor}
        value={number}
        onChangeText={txt => setNumber(txt)}
        maxLength={10}
        keyboardType="number-pad"
        style={[
          styles.addcontactInput,
          styles.addcontactInputMarginTop,
        ]}
      />
      <TouchableOpacity
        style={styles.addcontactSaveButton}
        onPress={addContact}
      >
        <Text style={styles.addcontactSaveButtonText}>Save Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddContactScreen;
