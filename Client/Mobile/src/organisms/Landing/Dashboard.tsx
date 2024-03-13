import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Landing/Profile';
import Tab1 from '../Landing/Tab1';
import Tab2 from '../Landing/Tab2';

const Tab = createBottomTabNavigator();

const Dashboard = () => {
    return (
        <Tab.Navigator
            initialRouteName="Profile"
            screenOptions={{
                tabBarActiveTintColor: "#DF2519",
            }}>
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: true,
                    tabBarLabel: 'Profile',
                    
                }}
            />
            <Tab.Screen
                name="Tab1"
                component={Tab1}
                options={{
                    headerShown: true,
                    tabBarLabel: 'Tab1',
                    
                }}
            />
            <Tab.Screen
                name="Tab2"
                component={Tab2}
                options={{
                    headerShown: true,
                    tabBarLabel: 'Tab2',
                    
                }}
            />
        </Tab.Navigator>
    );
};



export default Dashboard;