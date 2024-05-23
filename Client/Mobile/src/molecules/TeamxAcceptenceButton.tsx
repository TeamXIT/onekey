import { useState } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../styles/styles';



const TeamxAcceptenceButton=()=>{
    const [isAccepted, setIsAccepted] = useState(false);
    const handleAccept = () => {
        setIsAccepted(true);
      };
    return(
        <View style={styles.acceptContainer}>
        {isAccepted ? (
          <Text style={styles.acceptText}>Accepted ✔</Text>
        ) : (
        
        <TouchableOpacity   onPress={handleAccept}><Text style={styles.acceptButton}>Accept</Text></TouchableOpacity>
          
        )}
      </View>
    );
}
export default TeamxAcceptenceButton;


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
       
  
  
  

    

