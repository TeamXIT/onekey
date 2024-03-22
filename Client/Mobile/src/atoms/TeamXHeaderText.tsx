import { View, Text } from "react-native";
import { styles } from "../styles/styles";

const TeamXHeaderText = ({ value }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={styles.screenHeader}>{value}</Text>
        </View>
    )
};

export default TeamXHeaderText;