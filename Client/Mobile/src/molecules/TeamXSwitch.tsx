import React from 'react';
import { View, Switch, Text } from 'react-native';
import { styles } from '../styles/styles';

const TeamXSwitch = ({ isRemember, setIsRemember, value }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Switch
        trackColor={{ false: styles.appSwitchFalse.color, true: styles.appTertiary.color }}
        thumbColor={isRemember ? styles.appTertiary.color : styles.appSwitchTumbFalse.color}
        onValueChange={setIsRemember}
        value={isRemember}
      />
      <Text style={styles.switchTextStyle}>{value}</Text>
    </View>

  );
};

export default TeamXSwitch;
