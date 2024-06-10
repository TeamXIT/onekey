import React, { useState } from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const TeamxCustomButton = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAccept = () => {
    if (!isAccepted) { // Check if the button has not been accepted yet
      setIsAccepted(true);
      // Show an alert
      Alert.alert(
        'Confirmation',
        'Are you sure you want to accept?',
        [
          {
            text: 'Cancel',
            onPress: () => setIsAccepted(false), // Reset the acceptance status if canceled
            style: 'cancel'
          },
          {
            text: 'Accept',
            onPress: () => {
              // Perform any additional logic you want on acceptance
              // For now, we can just log a message
              console.log('Accepted');
            }
          }
        ]
      );
    }
  };

  return (
    <TouchableOpacity onPress={handleAccept}>
      <LinearGradient
        colors={['#888693', '#35314A']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{ height: 30, width: 90, borderRadius: 30 }}
      >
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, paddingTop: 3 }}>
          {isAccepted ? 'ACCEPTED' : 'ACCEPT'}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default TeamxCustomButton;
