import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import WelcomeScreen from './app/screens/WelcomeScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import LoginScreen from './app/screens/LoginScreen';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Hello World!!</Text>
    //   <StatusBar style="auto" />
    // </View>,
    // <WelcomeScreen />,
    //<RegiterScreen />
    <LoginScreen />
   
    
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
