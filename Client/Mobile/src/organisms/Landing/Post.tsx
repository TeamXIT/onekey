import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { GiftedChat, InputToolbar, Composer, Send, Message } from 'react-native-gifted-chat';
import {styles} from '../../styles/styles'

const Post = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello! may I help you',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
  }, []);

  const renderInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={styles.chatInputToolbar}
        primaryStyle={styles.chatInputPrimary}
      />
    );
  };

  const renderComposer = (props) => {
    return <Composer {...props} textInputStyle={styles.chatComposer} />;
  };

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View style={styles.chatSendButton}>
          <Text style={{fontSize:15,color:'#272239'}}>SEND</Text>
        </View>
      </Send>
    );
  };

  const renderMessage = (props) => {
    const { currentMessage } = props;

    return (
      <Message
        {...props}
        containerStyle={styles.chatMessageContainer}
        textStyle={styles.chatMessageText}
      />
    );
  };

  return (
    <View style={styles.chatContainer}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderInputToolbar={renderInputToolbar}
        renderComposer={renderComposer}
        renderSend={renderSend}
        renderMessage={renderMessage}
      />
    </View>
  );
};
export default Post;
