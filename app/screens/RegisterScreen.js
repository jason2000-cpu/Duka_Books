import React from 'react';
import { Text, View, StyleSheet, Button, TextInput, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



import Colors from '../config/Colors';



const userIcon = <FontAwesome5 name={'user'} brand solid color={Colors.primary} />;
const emailIcon = <FontAwesome5 name={'envelope'} brand solid  color={Colors.primary}/>;
const phoneIcon = <FontAwesome5 name={'phone'} brand  color={Colors.primary}/>;
const passwordIcon = <FontAwesome5 name={'lock'} brand />;
const googleIcon = <FontAwesome5 name={'google-plus-g'} brand size={35}/>



function RegisterScreen({navigation}) {
    return (
        <View style={styles.container}>
           <View style={styles.logo_sec}>
                <Text style={styles.logo}>DB</Text>
                <Text style={styles.logo_txt}>Duka  Books</Text>
                <Text style={styles.logo_ad}>your daily transactions kept safe</Text>
           </View>
           <View style={styles.form_sec}>
               <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
                  <Text style={{borderWidth: 2, fontSize: 20, paddingHorizontal: 50, fontWeight:'bold',backgroundColor:Colors.primary, color: Colors.white ,marginLeft:1, marginBottom: 40}}>SIGNUP</Text>
                  <Text style={{borderWidth:2, fontSize: 20, paddingHorizontal: 50, fontWeight:'bold', backgroundColor: Colors.white, color: Colors.primary, marginBottom: 40}}>SIGNIN</Text>
               </View>
            <View style={styles.form}>
                    <View style={{marginBottom: 9}}>
                        <Text style={{marginBottom: 4,fontSize:20}}>{userIcon}</Text>
                        <TextInput  style={{paddingLeft: 9, borderBottomWidth:1, borderRadius: 5, borderColor:Colors.primary}} placeholder='username'/>
                    </View>
                    <View style={{marginBottom: 9}}>
                        <Text style={{marginBottom: 4,fontSize:20}}>{emailIcon}</Text>
                        <TextInput  style={{paddingLeft: 9, borderBottomWidth:1, borderRadius: 5, borderColor:Colors.primary}} placeholder='email'/>
                    </View>
                    <View style={{marginBottom: 9}}>
                        <Text  style={{marginBottom: 4,fontSize:20}}>{phoneIcon}</Text>
                        <TextInput  style={{paddingLeft: 9, borderBottomWidth:1, borderRadius: 5, borderColor:Colors.primary}} placeholder='username'/>
                    </View>
                    <View style={{marginBottom: 9}}>
                        <Text style={{marginBottom: 4,fontSize:20}}>{passwordIcon}</Text>
                        <TextInput  style={{paddingLeft: 9, borderBottomWidth:1.5, borderRadius: 5, borderColor:Colors.primary}}  placeholder='{passwordIcon}'/>
                    </View>
                    {/* <View style={{marginBottom: 9}}>
                        <Text style={{marginBottom: 4, fontSize: 20}}>Password</Text>
                        <TextInput  style={{paddingLeft: 9, borderWidth:2, borderRadius: 5, borderColor:Colors.primary}} placeholder='Repeat password'/>
                    </View> */}
                    {/* <View style={{backgroundColor:Colors.primary, borderWidth: 2,borderRadius: 5, height: 30,marginHorizontal: 25}}>
                        <Text  style={{paddingLeft:110, color:Colors.secondary, fontSize: 20, paddingTop: 2}} onPress={()=>navigation.navigate('Dashboard')}>SIGNUP</Text>
                    </View>
                    <Text>Or</Text>
                    <View style={{backgroundColor:Colors.secondary, borderWidth: 2,borderRadius: 5, height: 30,marginHorizontal: 25}}>
                        <Text style={{paddingLeft:110, fontSize: 20, paddingTop: 2}} onPress={()=>navigation.navigate('Login') } >SIGNIN</Text>
                    </View> */}

                    <View style={{ marginTop: 50,flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                        <View>
                            <Text style={{paddingHorizontal:8, textAlign: 'center', fontSize: 15}}>Or Signup with</Text>
                        </View>
                        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                    </View>

                    {/* <Text style={{marginTop:50, borderWidth: 1, width: '80%', margin: 10, paddingHorizontal: 30, paddingVertical: 3}}><Text>{googleIcon}</Text> Signup with Google</Text> */}
                    <View style={{ border,borderRadius: 7,flexDirection:'row',alignContent:'center', justifyContent:'space-around', marginLeft: 25,marginTop:50, borderWidth: .5, width: '80%', paddingHorizontal: 30, paddingVertical: 3}}>
                        <Image source={require('../assets/google-color-icon.png')} style={{width: 40, height:40}} />
                        <Text style={{textAlignVertical:'center'}}>Sign up with Google</Text>
                    </View>
                    <Text></Text>
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
        flex: .74
    }

})

export default RegisterScreen;