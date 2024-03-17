// Dashboard.js
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Projects from './Projects';
import TeamXTabs from '../../molecules/TeamXTabs';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import post from './Post';
import { styles } from '../../styles/styles';

const Tab = createBottomTabNavigator();
const Dashboard = () => {
    return (

        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "#A73121",
                tabBarStyle: styles.tabBar,
            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: "#952323",
                    },
                    headerTintColor: "#F2E8C6",
                    tabBarLabel: ({ focused }) => (
                        <TeamXTabs
                            text="Home"
                            imageSource={require('../../images/ic_home.png')}
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tab.Screen name='post' component={post}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: "#952323",
                    },
                    headerTintColor: "#F2E8C6",
                    tabBarLabel: ({ focused }) => (
                        <TeamXTabs
                            text="Home"
                            imageSource={require('../../images/ic_home.png')}
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tab.Screen name="Projects" component={Projects}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: "#952323",
                    },
                    headerTintColor: "#F2E8C6",
                    tabBarLabel: ({ focused }) => (
                        <TeamXTabs
                            text="Projects"
                            imageSource={require('../../images/ic_project.png')}
                            focused={focused}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default Dashboard;


