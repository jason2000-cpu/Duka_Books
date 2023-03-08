import React from 'react';
import { View, Text, StyleSheet, TextComponent } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

//\\ import PieChart from 'react-native-pie-chart';
//import Pie from 'react-native-pie';

import Colors from '../config/Colors';
import Pie from 'react-native-pie';

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
              <View style={styles.body}>
                    <Text style={{fontSize:25}}>Invoices</Text>
                    <View style={{ flexDirection:'row'}}>
                        <Text style={{fontSize:25, fontWeight:'500'}}>Ksh 10,000</Text>
                        <Text style={{marginHorizontal: 10, fontSize:20,  top:2}}>unpaid</Text>
                        <Text style={{marginLeft:5, fontSize: 15, top:4}}>Last 365 days</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent:'space-between', margin:10}}>
                        <View >
                            <Text style={{fontSize: 20}}>Ksh 230</Text>
                            <Text style={{fontWeight: '150', marginLeft: 10}}>Overdue</Text>
                        </View>
                        <View>
                            <Text style={{marginRight:40, fontSize:20}}>Ksh 2000 </Text>
                            <Text style={{fontWeight: '150', marginLeft: 7}}>Not due yet</Text>
                        </View>
                    </View>
                    <Text style={{borderRadius: 4 ,borderWidth:1, width: '95%', height: 26, marginTop: 10, backgroundColor: Colors.grey}}></Text>
                    <Text style={{ borderBottomLeftRadius: 4,borderTopLeftRadius: 4,borderWidth:1, position:'absolute', top:128,height: 25, left: 0, width:'40%', backgroundColor:Colors.primary}}></Text>
                    <View>
                        <View style={{ marginTop:20,flexDirection:'row'}}>
                            <Text style={{marginRight: 12, fontSize:25, fontWeight:'500'}}>Ksh 3, 234</Text>
                            <Text style={{marginRight: 4, fontSize:20,  top:2}}>paid</Text>
                            <Text style={{marginLeft:5, fontSize: 15, top:6}}>Limit 30 days</Text>
                        </View>
                    <View style={{flexDirection: 'row', justifyContent:'space-between', margin:10}}>
                        <View >
                            <Text style={{fontSize: 20}}>Ksh 2, 062</Text>
                            <Text style={{fontWeight: '150', marginLeft: 10}}>Deposited</Text>
                        </View>
                        <View>
                            <Text style={{marginRight:40, fontSize:20}}>Ksh 1, 653 </Text>
                            <Text style={{fontWeight: '150', marginLeft: 7}}>Not deposited</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{borderRadius: 4 ,borderWidth:1, width: '95%', height: 26, marginTop: 10, backgroundColor: Colors.grey}}></Text>
                        <Text style={{ borderBottomLeftRadius: 4,borderTopLeftRadius: 4,borderWidth:1, position:'absolute', top:10,height: 25, left: 0, width:'60%', backgroundColor:Colors.primary}}></Text>
                    </View>
                    </View>
                    <View style={styles.expenses}>
                        <Text style={{fontSize:25}}>Expenses </Text>
                        <View style={{marginTop: 10}}>
                            <Text style={{marginRight:40, fontSize:22, fontWeight:'500'}}>Ksh 3, 500</Text>
                            <Text style={{fontWeight: '150', marginLeft: 10}}>Last month</Text>
                        </View>
                        <View style={styles.pie}>
        


                        </View>
                    </View>
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
    body:{
        flex: 15,
        marginLeft: 7,
        // borderWidth:2
        
    },
    expenses:{
        marginTop: 25
    }

})

export default DashboardScreen;