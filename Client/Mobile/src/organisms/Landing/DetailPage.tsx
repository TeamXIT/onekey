import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/styles';
import Products from './Products';

const DetailPage = ({ navigation ,route}) => {
  const [isAccepted, setIsAccepted] = useState(false);

return (
    <View style={styles.CardDetailscontainer}>
      <Text style={styles.deatailHeading}>Detail Page</Text>
      <View>
        <Text style={styles.detailText}>Name: Teamx </Text>
        <Text style={styles.detailText}>Email: Teamx@123 </Text>
        <Text style={styles.detailText}>Phone: 5532334433 </Text>
        <Text style={styles.detailText}>About: BPO plays a vital role in modern business operations
         by providing cost-effective solutions, access to specialized expertise, and enhanced operational efficiency. </Text>
      </View>
      <Text style={styles.detailText}>History</Text>
      <Products navigation={navigation} isAccepted={isAccepted} />
    </View>
  );
};

export default DetailPage;
