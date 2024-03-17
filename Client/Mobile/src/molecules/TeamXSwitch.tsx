import React from 'react';
import { View, Switch, Text } from 'react-native';
import { styles } from '../styles/styles';

const TeamXSwitch = ({ isRemember, setIsRemember, value }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Switch
        trackColor={{ false: styles.appSwitchFalse.color, true: styles.appColor.color }}
        thumbColor={isRemember ? styles.appColor.color : styles.appSwitchTumbFalse.color}
        onValueChange={setIsRemember}
        value={isRemember}
      />
      <Text style={styles.headerTextStyle}>{value}</Text>
    </View>

  );
};

export default TeamXSwitch;
