import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Projects from './Projects';
import Post from './Post';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {  View, Image } from 'react-native';
import { useEffect, useRef } from 'react';
import * as Animatable from 'react-native-animatable';
import { styles } from '../../styles/styles';

const Tab = createBottomTabNavigator();
const icons = {
    Home: require('../../images/ic_home.png'),
    post: require('../../images/ic_post.png'),
    Projects: require('../../images/ic_project.png'),
};

const TabArr = [
    { route: 'Home', label: 'Home', icon: icons.Home, component: Home },
    { route: 'Post', label: 'Post', icon: icons.post, component: Post },
    { route: 'Projects', label: 'Projects', icon: icons.Projects, component: Projects },
];

const TabButton = ({ item, onPress, accessibilityState }) => {
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);
    const circleRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        if (focused) {
            viewRef.current.animate('animate1');
            circleRef.current.animate('cricle1');
            textRef.current.transitionTo({ scale: 1 });
        } else {
            viewRef.current.animate('animate1');
            circleRef.current.animate('circle1');
            textRef.current.transitionTo({ scale: 1 });
        }
    },);

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={1}>
            <Animatable.View ref={viewRef} duration={1000} style={styles.tabContainer}>
                <View style={[styles.tabbtn, { borderColor: focused ? '#F2E8C6' : '#48525e' }]}>
                    <Animatable.View ref={circleRef} style={styles.circle} />
                    <Image resizeMode="contain" source={item.icon} style={styles.icon} />
                </View>
                <Animatable.Text ref={textRef} style={styles.text}>
                    {item.label}
                </Animatable.Text>
            </Animatable.View>
        </TouchableOpacity>
    );
};

const Dashboard = () => {
    return (
        <Tab.Navigator
            screenOptions={{
               
                tabBarStyle: styles.tabBar,
               
            }}>
            {TabArr.map((item, index) => (
                <Tab.Screen
                    key={index}
                    name={item.route}
                    component={item.component}
                    options={{
                        tabBarButton: (props) => <TabButton {...props} item={item} />,
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: '#48525e',
                        },
                        headerTintColor:'#F2E8C6'
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};

export default Dashboard;




