import React from 'react';
import { Text, View, StyleSheet, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


import Colors from '../config/Colors';



const userIcon = <FontAwesome5 name={'user'} brand solid color={Colors.primary} />;
const passwordIcon = <FontAwesome5 name={'lock'} brand />;


function LoginScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={{backgroundColor:Colors.primary, height:"35%", borderBottomRightRadius: 50}}>
               <View style={styles.regBtn}>
                    <Text style={{textAlignVertical: 'center', fontSize: 18}}>Don't have and account?</Text>
                    <Text style={{borderWidth:1, paddingHorizontal: 10, marginLeft:15,elevation:6, backgroundColor:Colors.grey, borderRadius: 3, fontSize:18, fontWeight:'400' }}  onPress={()=>navigation.navigate('Register') }>Get Started</Text>
               </View>
            <View style={styles.logo_sec}>
                <Text style={styles.logo}>DB</Text>
                <Text style={styles.logo_txt}>Duka  Books</Text>
                <Text style={styles.logo_ad}>your daily transactions kept safe</Text>
            </View>
            </View>
            <View style={styles.logForm}>

                <View style={{marginBottom: 9}}>
                    <Text style={{marginBottom: 4,fontSize:20}}>{userIcon}</Text>
                    <TextInput  style={{paddingLeft: 9, borderBottomWidth:1, borderRadius: 5, borderColor:Colors.primary}} placeholder='username'/>
                </View>
                <View style={{marginBottom: 9}}>
                    <Text style={{marginBottom: 4,fontSize:20}}>{passwordIcon}</Text>
                    <TextInput  style={{paddingLeft: 9, borderBottomWidth:1, borderRadius: 5, borderColor:Colors.primary}}  placeholder='password'/>
                </View>

                <View style={{alignItems:'center'}}>
                    <Text style={{marginTop: 30}}>Fogort password?</Text>
                    <Text style={{borderWidth:1, textAlign:'center',  marginTop: 20, width: "90%", color: Colors.white, backgroundColor:Colors.primary, elevation:10, borderRadius: 5, fontSize: 24, paddingVertical:3}} onPress={()=>navigation.navigate('Dashboard')}>Login</Text>
                </View>

                <View style={{ marginTop: 50,flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                    <View>
                        <Text style={{paddingHorizontal:8, textAlign: 'center', fontSize: 15}}>Or Signin with</Text>
                    </View>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                </View>
                <View style={{elevation: 1, backgroundColor: Colors.secondary,borderRadius: 7,flexDirection:'row',alignContent:'center', justifyContent:'space-around', marginLeft: 25,marginTop:50, borderWidth: .5, width: '80%', paddingHorizontal: 30, paddingVertical: 3}}>
                    <Image source={require('../assets/google-color-icon.png')} style={{width: 30, height:30}} />
                    <Text style={{textAlignVertical:'center'}}>Sign up with Google</Text>
                </View>




            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    regBtn:{
        flexDirection:'row',
        justifyContent:'flex-end',
        marginTop:35,
        marginRight:10
    },
    logo_sec:{
        alignItems:'center',
        marginTop:20
    },
    logo:{
        fontSize:70
    },
    logForm:{
       borderWidth:1,
        // borderTopLeftRadius:60,
        paddingTop: 50,
        paddingHorizontal: 15,
        height: "69%",
        borderColor: 'black'
    }

})

export default LoginScreen;