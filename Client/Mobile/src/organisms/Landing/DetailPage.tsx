import React from 'react';
import { styles } from '../../styles/styles';
import TeamXStarRating from '../../molecules/TeamXStarRating'
import {Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native-animatable';
const DetailPage = ({navigation}) => {
   return(
        <SafeAreaView style={styles.CardDetailscontainer}>
          <Text style={styles.deatailHeading}>Detail Page</Text>
          <View>
            <Text style={styles.detailText}>Name  : </Text>
            <Text style={styles.detailText}>Email   : </Text>
            <Text style={styles.detailText}>Phone  : </Text>
            <Text style={styles.detailText}>About  : </Text>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:25,padding:20,color:'#F2E8C6'}}>Rating  :</Text>
                <TeamXStarRating totalStars={5} />
            </View>
          </View>
          <View>
          <Text style={{color:'#F2E8C6',fontSize:25,paddingLeft:20}}>History</Text>
           
          </View>

        </SafeAreaView>
   )
}
export default DetailPage;