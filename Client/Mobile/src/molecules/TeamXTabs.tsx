
import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from '../styles/styles';

const TeamXTabs = ({ text, imageSource, focused }) => (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={imageSource}
        style={[styles.tabIcons, { tintColor: focused ? "#A73121" : "#777" }]}
      />
      <Text style={{ fontSize: 18, color: focused ? "#A73121" : "#777" }}>{text}</Text>
    </View>
  );

export default TeamXTabs;
