import React, { useRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import {styles} from  '../../styles/styles'

const MyPropertyScreen2 = () => {
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [townVillage, setTownVillage] = useState('');
    const [pincode, setPincode] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const addressRef = useRef(null);
    const townVillageRef = useRef(null);
    const pincodeRef = useRef(null);
    const latitudeRef = useRef(null);
    const longitudeRef = useRef(null);

    const states = [
        'Select State',
        'Andhra Pradesh',
        'Arunachal Pradesh',
        'Assam',
        'Bihar',
        'Chhattisgarh',
        'Goa',
        'Gujarat',
        'Haryana',
        'Himachal Pradesh',
        'Jammu and Kashmir',
        'Jharkhand',
        'Karnataka',
        'Kerala',
        'Madhya Pradesh',
        'Maharashtra',
        'Manipur',
        'Meghalaya',
        'Mizoram',
        'Nagaland',
        'Odisha',
        'Punjab',
        'Rajasthan',
        'Sikkim',
        'Tamil Nadu',
        'Telangana',
        'Tripura',
        'Uttar Pradesh',
        'Uttarakhand',
        'West Bengal',
    ];

    const cities = {
        'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Rajahmundry', 'Kakinada', 'Tirupati', 'Eluru', 'Anantapur'],
        'Arunachal Pradesh': ['Itanagar', 'Tawang', 'Bomdila', 'Pasighat', 'Aalo', 'Tezu', 'Namsai', 'Jairampur', 'Khonsa', 'Roing'],
        'Assam': ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon', 'Tinsukia', 'Tezpur', 'Dhubri', 'Bongaigaon', 'Sivasagar'],
        'Bihar': ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Purnia', 'Darbhanga', 'Arrah', 'Begusarai', 'Katihar', 'Munger'],
        'Chhattisgarh': ['Raipur', 'Bilaspur', 'Durg', 'Rajnandgaon', 'Korba', 'Jagdalpur', 'Ambikapur', 'Raigarh', 'Mahasamund', 'Dhamtari'],
        'Goa': ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda', 'Curchorem', 'Sanquelim', 'Bicholim', 'Valpoi', 'Pernem'],
        'Gujarat': ['Gandhinagar', 'Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Jamnagar', 'Bhavnagar', 'Junagadh', 'Gandhidham', 'Anand'],
        'Haryana': ['Chandigarh', 'Faridabad', 'Gurgaon', 'Panipat', 'Ambala', 'Yamunanagar', 'Rohtak', 'Hisar', 'Karnal', 'Sonipat'],
        'Himachal Pradesh': ['Shimla', 'Dharamshala', 'Kangra', 'Hamirpur', 'Una', 'Solan', 'Sirmaur', 'Chamba', 'Mandi', 'Kullu'],
        'Jammu and Kashmir': ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Kupwara', 'Pulwama', 'Shopian', 'Ganderbal', 'Bandipora', 'Udhampur'],
        'Jharkhand': ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Deoghar', 'Hazaribagh', 'Giridih', 'Ramgarh', 'Phusro', 'Chas'],
        'Karnataka': ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum', 'Gulbarga', 'Davanagere', 'Bellary', 'Bijapur', 'Shimoga'],
        'Kerala': ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Kollam', 'Thrissur', 'Alappuzha', 'Palakkad', 'Malappuram', 'Ponnani', 'Vatakara'],
        'Madhya Pradesh': ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain', 'Sagar', 'Ratlam', 'Satna', 'Dewas', 'Murwara'],
        'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Solapur', 'Amravati', 'Kolhapur', 'Kalyan', 'Thane'],
        'Manipur': ['Imphal', 'Thoubal', 'Bishnupur', 'Churachandpur', 'Senapati', 'Ukhrul', 'Tamenglong', 'Chandel', 'Jiribam', 'Kangpokpi'],
        'Meghalaya': ['Shillong', 'Tura', 'Nongstoin', 'Jowai', 'Baghmara', 'Mairang', 'Nongpoh', 'Mawkyrwat', 'Resubelpara', 'Williamnagar'],
        'Mizoram': ['Aizawl', 'Lunglei', 'Saiha', 'Champhai', 'Kolasib', 'Serchhip', 'Lawngtlai', 'Mamit', 'Saitual', 'Hnahthial'],
        'Nagaland': ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang', 'Wokha', 'Zunheboto', 'Mon', 'Phek', 'Kiphire', 'Longleng'],
        'Odisha': ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Berhampur', 'Sambalpur', 'Puri', 'Balasore', 'Bhadrak', 'Baripada', 'Balangir'],
        'Punjab': ['Chandigarh', 'Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Hoshiarpur', 'Mohali', 'Batala', 'Pathankot'],
        'Rajasthan': ['Jaipur', 'Jodhpur', 'Kota', 'Bikaner', 'Ajmer', 'Udaipur', 'Bhilwara', 'Alwar', 'Bharatpur', 'Sikar'],
        'Sikkim': ['Gangtok', 'Namchi', 'Geyzing', 'Mangan', 'Singtam', 'Rangpo', 'Jorethang', 'Ravangla', 'Soreng', 'Chungthang'],
        'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli', 'Tiruppur', 'Vellore', 'Erode', 'Thoothukudi'],
        'Telangana': ['Hyderabad', 'Warangal', 'Nizamabad', 'Khammam', 'Karimnagar', 'Ramagundam', 'Mahbubnagar', 'Nalgonda', 'Adilabad', 'Siddipet'],
        'Tripura': ['Agartala', 'Udaipur', 'Kailasahar', 'Dharmanagar', 'Ambassa', 'Khowai', 'Belonia', 'Sabroom', 'Sonamura', 'Amarpur'],
        'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Ghaziabad', 'Agra', 'Meerut', 'Varanasi', 'Allahabad', 'Bareilly', 'Aligarh', 'Moradabad'],
        'Uttarakhand': ['Dehradun', 'Haridwar', 'Roorkee', 'Haldwani', 'Rudrapur', 'Kashipur', 'Rishikesh', 'Ramnagar', 'Pithoragarh', 'Nainital'],
        'West Bengal': ['Kolkata', 'Howrah', 'Durgapur', 'Siliguri', 'Asansol', 'Maheshtala', 'Rajpur Sonarpur', 'South Dumdum', 'Bidhannagar', 'Kamarhati'],
    };

    return (
        <ScrollView style={styles.propertycontainer}>
        
            <Text style={styles.propertytitle}>Property Location</Text>

            <TextInput
                style={styles.propertyinput}
                placeholder="Address"
                placeholderTextColor={'white'}
                value={address}
                onChangeText={setAddress}
                onSubmitEditing={() => townVillageRef.current.focus()}
                returnKeyType="next"
                blurOnSubmit={false}
                ref={addressRef}
            />
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={state}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => {
                        setState(itemValue);
                        setCity(''); // Reset city when state changes
                    }}
                >
                    {states.map((state, index) => (
                        <Picker.Item key={index} label={state} value={state} style={{fontSize:20,backgroundColor: '#35314A',color:'#FFFFFF'}}/>
                    ))}
                </Picker>
                <Image source={require('../../images/ic_arrowDown.png')} style={styles.pickerIcon} tintColor={'#7F7C8D'} />

            </View >
            <View style={styles.pickerContainer}>

                <Picker
                    selectedValue={city}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setCity(itemValue)}
                >
                    <Picker.Item label="Select City" value=""  style={{fontSize:20,backgroundColor: '#35314A',color:'#FFFFFF'}}/>
                    {(cities[state] || []).map((city, index) => (
                        <Picker.Item key={index} label={city} value={city} style={{fontSize:20,backgroundColor: '#35314A',color:'#FFFFFF'}}/>
                    ))}
                </Picker>
                <Image source={require('../../images/ic_arrowDown.png')} style={styles.pickerIcon} tintColor={'#7F7C8D'} />

            </View>

            <TextInput
                style={styles.propertyinput}
                placeholder="Town Village"
                placeholderTextColor={'white'}
                value={townVillage}
                onChangeText={setTownVillage}
                onSubmitEditing={() => pincodeRef.current.focus()}
                returnKeyType="next"
                blurOnSubmit={false}
                ref={townVillageRef}
            />

            <TextInput
                style={styles.propertyinput}
                placeholder="Pincode"
                placeholderTextColor={'white'}

                value={pincode}
                onChangeText={setPincode}
                keyboardType="numeric"
                onSubmitEditing={() => latitudeRef.current.focus()}
                returnKeyType="next"
                blurOnSubmit={false}
                ref={pincodeRef}
            />

            <TextInput
                style={styles.propertyinput}
                placeholder="Google Maps Latitude"
                placeholderTextColor={'white'}

                value={latitude}
                onChangeText={setLatitude}
                keyboardType="numeric"
                onSubmitEditing={() => longitudeRef.current.focus()}
                returnKeyType="next"
                blurOnSubmit={false}
                ref={latitudeRef}
            />

            <TextInput
                style={styles.propertyinput}
                placeholder="Google Maps Longitude"
                placeholderTextColor={'white'}

                value={longitude}
                onChangeText={setLongitude}
                keyboardType="numeric"
                returnKeyType="done"
                ref={longitudeRef}
            />

            <View style={styles.propertybuttonContainer}>
               <TouchableOpacity
                    onPress={() => { }}
                >
                    <LinearGradient
                        colors={['#888693', '#35314A']}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        style={ styles.propertybutton}
                    >
                        <Text style={styles.propertybuttonText}>Previous</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { }}
                >
                    <LinearGradient
                        colors={['#888693', '#35314A']}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        style={styles.propertybutton}                    >
                        <Text style={styles.propertybuttonText}>Next</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        
        </ScrollView>
    );
};
export default MyPropertyScreen2;







































































