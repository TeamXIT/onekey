import React from 'react';
import { View, Switch, Text } from 'react-native';
import { styles } from '../styles/styles';

const RememberSwitch = ({ isRemember, setIsRemember }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Switch
        trackColor={{ false: styles.appSwitchFalse.color, true: styles.appColor.color }}
        thumbColor={isRemember ? styles.appColor.color : styles.appSwitchTumbFalse.color}
        onValueChange={setIsRemember}
        value={isRemember}
      />
      <Text style={styles.headerTextStyle}>Remember</Text>
    </View>

  );
};

export default RememberSwitch;
