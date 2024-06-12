import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../../styles/styles';
import Products from './Products';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CardOptions } from '../../helpers/Models/CardOptions';
import History from './History';

const DetailPage = ({ navigation, route }) => {
  const [isAccepted, setIsAccepted] = useState(false);
  const Role = AsyncStorage.getItem('Role');
  const RoleId = 4 //Assign 3 for BPO and assign 4 for Lawyer

  return (

    <SafeAreaView style={styles.CardDetailscontainer}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goback}>
        <Image
          source={require('../../images/ic_back.png')}
          style={styles.carddeatilsIcon}
        />
      </TouchableOpacity>
      {(RoleId === CardOptions.BPO) ? (
        <Text style={styles.deatailHeading}>BPO Detail Page</Text>
      ) : (RoleId === CardOptions.Lawyer) ? (
        <Text style={styles.deatailHeading}>Lawyer Detail Page</Text>
      ) : (
        null
      )}

      <View>
        <Text style={styles.detailText}>Name: Teamx </Text>
        <Text style={styles.detailText}>Email: Teamx@123 </Text>
        <Text style={styles.detailText}>Phone: 5532334433 </Text>
        <Text style={styles.detailText}>About: BPO plays a vital role in modern business operations
          by providing cost-effective solutions, access to specialized expertise, and enhanced operational efficiency. </Text>
      </View>
      <Text style={styles.deatailHeading}>History</Text>
      {/* <Products navigation={navigation} isAccepted={isAccepted} /> */}
      <History navigation={navigation}  />

    </SafeAreaView>
  );
};

export default DetailPage;
