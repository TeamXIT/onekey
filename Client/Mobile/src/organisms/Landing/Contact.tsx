import React, { useEffect, useState } from 'react';
import { View, Text, PermissionsAndroid, FlatList, Image, TouchableOpacity, Linking, Alert, StyleSheet } from 'react-native';
import Contact from 'react-native-contacts';
import { useIsFocused } from '@react-navigation/native';
import Communications from 'react-native-communications';
import { Swipeable } from 'react-native-gesture-handler';
import { styles } from "../../styles/styles";

const Contacts = ({ navigation }) => {
  const [contactList, setContactList] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    getPermission();
  }, [isFocused]);

  const getPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts',
          message: 'This app would like to view your contacts.',
          buttonPositive: 'Please accept bare mortal',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const contacts = await Contact.getAll();
        setContactList(contacts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = (contact) => {
    Alert.alert(
      'Confirm Deletion',
      `Are you sure you want to delete ${contact.displayName}? This action will remove them from your contacts.`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              await Contact.deleteContact(contact);
              getPermission(); // Refresh the contact list
            } catch (error) {
              console.log('Error deleting contact: ', error);
            }
          },
        },
      ]
    );
  };

  const renderRightActions = (contact) => (
    <TouchableOpacity
      onPress={() => deleteContact(contact)}
      style={styles.contactRightAction}
    >
      <Text style={styles.contactRightActionText}>Delete</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.contactContainer}>
      <View style={styles.contactHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../images/ic_back.png')}
            style={styles.contactBackIcon}
          />
        </TouchableOpacity>
        <Text style={styles.contactHeaderText}>Device contacts</Text>
      </View>
      <FlatList
        data={contactList}
        keyExtractor={(item) => item.recordID}
        renderItem={({ item }) => (
          <Swipeable renderRightActions={() => renderRightActions(item)}>
            <TouchableOpacity style={styles.contactItem}>
              <View style={styles.contactItemLeft}>
                <View style={styles.contactInitialCircle}>
                  <Text style={styles.contactInitialText}>
                    {item.displayName ? item.displayName.charAt(0).toUpperCase() : ''}
                  </Text>

                </View>
                <View style={styles.contactItemTextContainer}>
                  <Text style={styles.contactItemText}>{item.displayName}</Text>
                  <Text style={styles.contactItemSubText}>
                    {item.phoneNumbers.length > 0 ? item.phoneNumbers[0].number : 'No number'}
                  </Text>
                </View>
              </View>
              <View style={styles.contactItemRight}>
                <TouchableOpacity onPress={() => Communications.text(item.phoneNumbers[0].number)}>
                  <Image
                    source={require('../../images/ic_meaasage.png')}
                    style={styles.contactMessageIcon}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL(`tel:${item.phoneNumbers[0].number}`)}>
                  <Image
                    source={require('../../images/ic_call.png')}
                    style={styles.contactCallIcon}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </Swipeable>
        )}
      />
      <TouchableOpacity
        style={styles.contactAddButton}
        onPress={() => navigation.navigate('AddContactScreen')}
      >
        <Image
          source={require('../../images/ic_add.png')}
          style={styles.contactAddIcon}
        />
      </TouchableOpacity>
    </View>
  );
};





export default Contacts;
