import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import WelcomeScreen from './app/screens/WelcomeScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import LoginScreen from './app/screens/LoginScreen';
import Routes from './app/screens/Routes';


export default function App() {
  return (
    // <WelcomeScreen />,
    //<RegiterScreen />
    <LoginScreen />,
    <Routes />
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
