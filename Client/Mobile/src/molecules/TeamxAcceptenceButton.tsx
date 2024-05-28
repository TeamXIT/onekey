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
          <Text style={styles.acceptText}>Accepted</Text>
        ) : (
        
                    <Button title='Accept' color={'#48525e'}  onPress={handleAccept}  />

          
        )}
      </View>
    );
}
export default TeamxAcceptenceButton;


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
       
  
  
  

    

