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
import SignupWithOTP from './src/organisms/Authen/SignupWithOTP';
import UserTypeSelection from './src/organisms/Authen/UserTypeSelection';
import Verification from './src/organisms/Authen/Verification';
import VerificationCode from './src/organisms/Authen/VerificationCode';
import Dashboard from './src/organisms/Landing/Dashboard';
import SplashScreen from './src/organisms/Authen/SplashScreen';
import ForgotPassword from './src/organisms/Authen/ForgotPassword';
import Comment from './src/organisms/Landing/Comment';
import Products from './src/organisms/Landing/Products';
import { Provider } from 'react-redux';
import { store } from './src/reducers/store';
import OneKeyIntro from './src/organisms/Authen/OneKeyInto';
import ProductDetails from './src/organisms/Landing/ProductDetails';
import Settings from './src/organisms/Landing/Settings';
import ImageList from './src/organisms/Landing/ImageList';
import Upload from './src/organisms/Landing/Upload';
import Feedback from './src/organisms/Landing/Feedback';
import DocumentViewer from './src/organisms/Landing/DocumentViewer';
import IntrestedClientDetails from './src/organisms/Landing/IntrestedClientDetails';
import PreviousDealedProduct from './src/organisms/Landing/PreviousDealedProduct';
import ProductRelatedDocuments from './src/organisms/Landing/ProductRelatedDocuments';
import ShareContacts from './src/organisms/Landing/ShareContacts';
import UploadDocument from './src/organisms/Landing/UploadDocuments';
import UploadVerifyCertification from './src/organisms/Landing/UploadVerifyCertification';
import contacts from './src/organisms/Landing/Contact';
import AddContactScreen from './src/organisms/Landing/AddContactScreen';
import DetailPage from './src/organisms/Landing/DetailPage';
import History from './src/organisms/Landing/History';
import MyPropertyScreen2 from './src/organisms/Landing/MyPropertyScreen2';
import TeamxPropertyHeader from './src/molecules/TeamxPropertyHeader'

const Stack = createStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="signin">
      <Stack.Screen
        name="intro"
        component={OneKeyIntro}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signup"
        component={Signup}
        options={{
          title: 'Signup',
          //Set Header Title
          headerStyle: {
            backgroundColor: styles.appTertiary.color, //Set Header color
          },
          headerShown: false,
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="signupWithOTP"
        component={SignupWithOTP}
        options={{
          title: 'signupWithOTP',
          //Set Header Title
          headerStyle: {
            backgroundColor: styles.appTertiary.color, //Set Header color
          },
          headerShown: false,
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
            backgroundColor: styles.appTertiary.color, //Set Header color
          },
          headerShown: false,
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="VerificationCode"
        component={VerificationCode}
        options={{
          title: 'VerificationCode', //Set Header Title
          headerStyle: {
            backgroundColor: styles.appTertiary.color, //Set Header color
          },
          headerShown: false,
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
          title: '', //Set Header Title
          headerStyle: {
            backgroundColor: styles.appPrimary.color, //Set Header color
          },
          headerShown: false,
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="forgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
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
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="upload"
        component={Upload}
      />
      <Stack.Screen
        name="project"
        component={Products}
      />
      <Stack.Screen
        name='settings'
        component={Settings}
      />
      <Stack.Screen
        name="comment"
        component={Comment}
        options={{
          title: 'comment',
          //Set Header Title
          headerStyle: {
            backgroundColor: styles.appPrimary.color, //Set Header color
          },
          headerShown: true,
          headerTintColor: styles.appTertiary.color, //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          }
        }}
      />
      <Stack.Screen
        name="Feedback"
        component={Feedback}
        options={{
          title: 'Feedback',
          //Set Header Title
          headerStyle: {
            backgroundColor: styles.appPrimary.color, //Set Header color
          },
          headerShown: true,
          headerTintColor: styles.appTertiary.color, //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          }
        }}
      />
      <Stack.Screen
        name="imagelist"
        component={ImageList}
        options={{
          headerStyle: {
            backgroundColor: styles.appSecondary.color, //Set Header color
          },
          headerShown: true,
          headerTintColor: styles.appPrimary.color, //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          title: 'ProductDetails',
          //Set Header Title
          headerStyle: {
            backgroundColor: styles.appPrimary.color, //Set Header color
          },
          headerShown: false,
          headerTintColor: styles.appSecondary.color, //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="DocumentViewer"
        component={DocumentViewer}
      />
      <Stack.Screen
        name="IntrestedClientDetails"
        component={IntrestedClientDetails}
      />
      <Stack.Screen
        name="PreviousDealedProduct"
        component={PreviousDealedProduct}
      />
      <Stack.Screen
        name="ProductRelatedDocuments"
        component={ProductRelatedDocuments}
      />
      <Stack.Screen
        name="ShareContacts"
        component={ShareContacts}
      />
      <Stack.Screen
        name="UploadDocument"
        component={UploadDocument}
      />
      <Stack.Screen
        name="UploadVerifyCertification"
        component={UploadVerifyCertification}
      />
      <Stack.Screen name="Contacts" component={contacts} options={{ headerShown: false }} />
      <Stack.Screen name="AddContactScreen" component={AddContactScreen} options={{ headerShown: false }} />
      <Stack.Screen name="DetailPage" component={DetailPage} options={{ headerShown: false }} />
      <Stack.Screen
        name="History"
        component={History}
        options={{
          title: 'History',
          //Set Header Title
          headerStyle: {
            backgroundColor: styles.appPrimary.color, //Set Header color
          },
          headerShown: false,
          headerTintColor: styles.appSecondary.color, //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="MyPropertyScreen2"
        component={MyPropertyScreen2}
        options={{
          headerTitle: () => <TeamxPropertyHeader />,          //Set Header Title
          headerStyle: {
            backgroundColor: styles.appPrimary.color, //Set Header color
            
          },
          headerShown: true,
          headerTintColor: styles.appTertiary.color, //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
           },
           headerLeft: null, // Hide the back button
        }} />

    </Stack.Navigator>
  );
};

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          {/* SplashScreen which will come once for 5 Seconds */}
          <Stack.Screen
            name="splashScreen"
            component={SplashScreen}
            // Hiding header for Splash Screen
            options={{ headerShown: false }}
          />
          {/* Auth Navigator: Include Login and Signup */}
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{ headerShown: false }}
          />
          {/* Navigation Drawer as a landing page */}
          <Stack.Screen
            name="Landing"
            component={Landing}
            // Hiding header for Navigation Drawer
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
