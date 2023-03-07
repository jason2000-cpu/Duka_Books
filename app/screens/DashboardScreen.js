import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



import Colors from '../config/Colors';

const BarIcon = <FontAwesome5 name={'bars'} brand solid />;
const SearchIcon = <FontAwesome5 name={'search'} brand />;
const BellIcon = <FontAwesome5 name={'bell'} brand solid />;
{/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-magnifying-glass" /> */}


function DashboardScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{marginRight: 20, fontSize:30}}>{BarIcon}</Text>
                <Text style={{marginRight: 20, fontSize:30, color:Colors.primary}}>Duka  Books</Text>
                <Text style={{marginRight: 20, fontSize:30}}>{SearchIcon}</Text>
                <Text style={{marginRight: 20, fontSize:30}}>{BellIcon}</Text>
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
    }
})

export default DashboardScreen;