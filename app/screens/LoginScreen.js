import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Colors from '../config/Colors';

function LoginScreen({navigation}) {
    return (
        <View style={styles.container}>
           <View style={styles.logo_sec}>
                <Text style={styles.logo}>DB</Text>
                <Text style={styles.logo_txt}>Duka  Books</Text>
                <Text style={styles.logo_ad}>your daily transactions kept safe</Text>
           </View>
           <View style={styles.form_sec}>
              <Text style={{ fontSize: 25, fontWeight:'bold', color: Colors.primary ,marginLeft:130, marginBottom: 40}}>LOGIN</Text>
            <View style={styles.form}>
                    <View style={{marginBottom: 9}}>
                        <Text style={{marginBottom: 4,fontSize:20}}>username</Text>
                        <TextInput  style={{paddingLeft: 9, borderWidth:2, borderRadius: 5, borderColor:Colors.primary}} placeholder='username'/>
                    </View>
                    <View style={{marginBottom: 9}}>
                        <Text style={{marginBottom: 4, fontSize: 20}}>Password</Text>
                        <TextInput  style={{paddingLeft: 9, borderWidth:2, borderRadius: 5, borderColor:Colors.primary}} placeholder='Repeat password'/>
                    </View>
                    <View style={{backgroundColor:Colors.primary, borderWidth: 2,borderRadius: 5, height: 30,marginHorizontal: 25}}>
                        <Text  style={{paddingLeft:110, color:Colors.secondary, fontSize: 20, paddingTop: 2}} onPress={()=>navigation.navigate('Dashboard')}>LOGIN</Text>
                    </View>
                    <Text>Or</Text>
                    <View style={{backgroundColor:Colors.secondary, borderWidth: 2,borderRadius: 5, height: 30,marginHorizontal: 25}}>
                        <Text style={{paddingLeft:110, fontSize: 20, paddingTop: 2}} onPress={()=> navigation.navigate("Register")}>SIGNUP</Text>
                    </View>
            </View>

           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.primary,
        flex: 1,
        justifyContent:'flex-end'
    
    },
    logo_sec:{
        position: 'absolute',
        top: 50,
        left: 100,
    },
    logo:{
        fontSize: 100,
        
    },
   logo_txt:{
        position:'absolute',
        top: 90,
        left: 2,
        color:Colors.white,
        fontSize: 25
    },
    logo_ad:{
        color:Colors.white,
        fontWeight:'bold',
        opacity:.7
    },
    form_sec:{
        padding: 10,
        backgroundColor: Colors.secondary,
        borderWidth:2,
        borderColor: Colors.secondary,
        borderTopEndRadius: 40,
        borderTopLeftRadius: 40,
        flex: .6
    }

})

export default LoginScreen;