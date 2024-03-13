/**
 * TeamX OneKey Mobile Application
 * https://team-x.in/
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { styles } from './src/styles/styles';
import Signin from './src/organisms/Authen/Signin';
import Signup from './src/organisms/Authen/Signup';
import UserTypeSelection from './src/organisms/Authen/UserTypeSelection';
import Verification from './src/organisms/Authen/Verification';
import Dashboard from './src/organisms/Landing/Dashboard';
import Home from './src/organisms/Landing/Home';
import SplashScreen from './src/organisms/Authen/SplashScreen';

const Stack = createStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="signin">
      <Stack.Screen
        name="signin"
        component={Signin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signup"
        component={Signup}
        options={{
          title: 'Signup', //Set Header Title
          headerStyle: {
            backgroundColor: styles.appColor.color, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="verification"
        component={Verification}
        options={{
          title: 'Verification', //Set Header Title
          headerStyle: {
            backgroundColor: styles.appColor.color, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="typeselection"
        component={UserTypeSelection}
        options={{
          title: 'Selection User', //Set Header Title
          headerStyle: {
            backgroundColor: styles.appColor.color, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const Landing = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="dashboard">
      <Stack.Screen
       name="dashboard"
       component={Dashboard}
       options={{headerShown: false}}
      />
      <Stack.Screen
       name="home"
       component={Home}
      />
    </Stack.Navigator>
  );
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="splashScreen">
      {/* SplashScreen which will come once for 5 Seconds */}
      <Stack.Screen
        name="splashScreen"
        component={SplashScreen}
        // Hiding header for Splash Screen
        options={{headerShown: false}}
      />
      {/* Auth Navigator: Include Login and Signup */}
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{headerShown: false}}
      />
      {/* Navigation Drawer as a landing page */}
      <Stack.Screen
        name="Landing"
        component={Landing}
        // Hiding header for Navigation Drawer
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;
