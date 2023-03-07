import React from 'react';
import { View, Text, StyleSheet, TextComponent } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



import Colors from '../config/Colors';

const BarIcon = <FontAwesome5 name={'bars'} brand solid size={25} />;
const SearchIcon = <FontAwesome5 name={'search'} brand size={25} />;
const BellIcon = <FontAwesome5 name={'bell'} brand solid size={25} />;


function DashboardScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{marginRight: 70, marginLeft: 10, marginTop: 8, fontSize:30}}>{BarIcon}</Text>
                <Text style={{marginRight: 10, fontSize:30, color:Colors.primary}}>Duka  Books</Text>
                <Text style={{marginRight: 10,marginLeft: 20,marginTop: 8, fontSize:30}}>{SearchIcon}</Text>
                <Text style={{marginRight: 20, marginLeft:20, marginTop: 8, fontSize:30}}>{BellIcon}</Text>
            </View>
              <View style={styles.invoice}>
                    <Text style={{fontSize:25}}>Invoices</Text>
                    <Text style={{display:'flex', flexDirection:'row'}}>
                        <Text style={{fontSize:25,}}>Ksh 10000</Text>

                    </Text>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.secondary,
    },
    header:{
        paddingTop: 30,
        flex: 1,
        flexDirection:'row'
    },
    invoice:{
        flex: 15,
        marginLeft: 10,
        
    }

})

export default DashboardScreen;