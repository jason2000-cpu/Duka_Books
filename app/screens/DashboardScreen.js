import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


import Colors from '../config/Colors';

function DashboardScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{marginRight: 20, fontSize:30}}>icon</Text>
                <Text style={{marginRight: 20, fontSize:30, color:Colors.primary}}>Duka  Books</Text>
                <Text style={{marginRight: 20, fontSize:30}}>icon</Text>
                <Text style={{marginRight: 20, fontSize:30}}>icon</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.secondary
    },
    header:{
        paddingTop: 30,
        flex: 1,
        flexDirection:'row'
    }
})

export default DashboardScreen;