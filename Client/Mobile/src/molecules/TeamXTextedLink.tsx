import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";

type ItemProps = {
    value: string,
    linkValue: string,
    handleOnPress: () => void;
}
const TeamXTextedLink = (props: ItemProps) => {
    return (
        <View style={styles.extedLinkContainer}>
            <Text style={styles.textStyle}>{props.value}</Text>
            <TouchableOpacity>
                <Text style={[styles.textStyle, { fontWeight: 'bold' }]} onPress={() => props.handleOnPress()}>{props.linkValue}</Text>
            </TouchableOpacity>
        </View>
    )
};

export default TeamXTextedLink;