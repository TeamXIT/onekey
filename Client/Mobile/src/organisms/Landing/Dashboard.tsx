import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import BPOContacts from './BPOContacts';
import FeedBacks from './FeedBack';

const Tab = createBottomTabNavigator();

const Dashboard = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "#DF2519",
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: true,
                    tabBarLabel: 'Home',
                    
                }}
            />
            <Tab.Screen
                name="FeedBacks"
                component={FeedBacks}
                options={{
                    headerShown: true,
                    tabBarLabel: 'FeedBacks',
                    
                }}
            />
            <Tab.Screen
                name="BPOContacts"
                component={BPOContacts}
                options={{
                    headerShown: true,
                    tabBarLabel: 'BPOContacts',
                    
                }}
            />
        </Tab.Navigator>
    );
};


export default Dashboard;