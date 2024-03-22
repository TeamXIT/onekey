
import { Text } from 'react-native';

const Comment = ({ route }) => {
    console.log("Comment Params: ", JSON.stringify(route));
    const { commentData } = route.params;
    return (
        <Text >Title: {commentData.title}</Text>
    );
}

export default Comment;
