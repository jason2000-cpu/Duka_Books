import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


import Colors from '../config/Colors';

function WelcomeScreen(props) {
    return (
        <View style={styles.container}>
           <View style={styles.logo_sec}>
                <Text style={styles.logo}>DB</Text>
                <Text style={styles.logo_txt}>Duka    Books</Text>
                <Text style={styles.logo_ad}>your daily transactions kept safe</Text>
           </View>
           <View style={styles.btn_sec}>
            <Text  onPress={()=>{alert("Hello jackson")}} style={styles.btn}>Get Started -&gt;</Text>
           </View>


   
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.primary,
        justifyContent:'flex-end',
        
    },
    logo_sec:{
        position:'absolute',
        left: '30%',
        top:250
    },
    logo:{
        fontSize:130
    },
    logo_txt:{
        position:'absolute',
        top: 120,
        left: 10,
        color:Colors.white,
        fontSize: 25
    },
    logo_ad:{
        color:Colors.white,
        fontWeight:'bold',
        opacity:.7
    },
    btn_sec:{
        backgroundColor: Colors.white,
        height: 45,
        marginVertical: 150,
        marginHorizontal: 40,
        borderStyle:'solid',
        borderColor:Colors.black,
        borderWidth: 1,
        borderRadius: 5
    },
    btn:{
        color:Colors.primary,
        fontWeight:'bold',
        fontSize: 25,
        paddingLeft: 80,
        marginTop: 4
    }


})

export default WelcomeScreen;