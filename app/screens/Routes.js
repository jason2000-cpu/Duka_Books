import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack'


import WelcomeScreen from './WelcomeScreen';
import RegisterScreen from './RegisterScreen';
import LoginScreen from './LoginScreen';
import DashboardScreen from './DashboardScreen';

const Stack = createNativeStackNavigator();

function Routes(props) {
    return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={WelcomeScreen} options={{title:'register', headerShown:false}}/>
        <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown:false}}/>
        <Stack.Screen name='Login' component={LoginScreen}   options={{ headerShown:false}}/>
        <Stack.Screen name='Dashboard' component={DashboardScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
    );
}

export default Routes;