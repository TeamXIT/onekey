import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";

type ItemProps = {
    value: string,
    linkValue: string,
    handleOnPress: () => void;
}
const TeamXTextedLink = (props: ItemProps) => {
    return (
        <View style={styles.bottom_text}>
            <Text style={styles.text}>{props.value}</Text>
            <TouchableOpacity>
                <Text style={[styles.text, { fontWeight: 'bold' }]} onPress={() => props.handleOnPress()}>{props.linkValue}</Text>
            </TouchableOpacity>
        </View>
    )
};

export default TeamXTextedLink;