import 'react-native-gesture-handler';
import React,{useState,useEffect } from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';
import { createStackNavigator,HeaderStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AppContext  from './src/components/Appcontext/contextApi';

import PreLogin from './src/screens/Pre-login/pre-login';
import Login from './src/screens/Login/Login';
import SignUp from './src/screens/Sign-up/SignUp';
import ForgotPassword from './src/screens/Forgot-password/forgotScreen';
import NewPassword from './src/screens/New-Password/NewPasswordScreen';
import VerifyEmail from './src/screens/Verify-Email/VerifyEmail';

import Home from './src/screens/Home/HomeScreen'

const App = (navigation) => {

  const [userToken, setuserToken] = useState('null');
  const userSettings = {
    userToken:userToken,
    setuserToken
  }

  return(
    <AppContext.Provider value={userSettings}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {
            userToken == null ? (
              <>
                <Stack.Screen name="PreLogin" component={PreLogin} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="NewPassword" component={NewPassword} />
                <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
              </>
            ) : (
              <>
               <Stack.Screen name="Home" component={Home} />
              </>
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
    );

}

export default App;

const Stack = createStackNavigator();