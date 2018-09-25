import React,{Component} from 'react';
import {View,Text,StyleSheet,Dimensions,Image} from 'react-native';
import { withNavigation} from 'react-navigation';

class Attendance extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <View style={{flex:1,margin:5}}>
                <View accessibilityLabel='DateSelector' style={{flex:2,justifyContent:'center',alignItems:'center',borderColor:'#1f90cc',borderWidth:2,borderRadius:10}}>
                        <View style={{
                            width:Dimensions.get('window').width*0.95,
                            height:Dimensions.get('window').height*0.13,
                             backgroundColor:'#FFFBFE'}}>
                        <View style={{flexDirection:'row',flex:1}}>
                            <View accessibilityLabel="CalendaeIcon" style={{flex:2,backgroundColor:'#fff',justifyContent:'center',
                                    alignItems:'center'}}>
                                <Image source={require('../../images/notification.png')} style={{
                                    width:Dimensions.get('window').width*0.11,
                                    height:Dimensions.get('window').height*0.063
                                }}/>
                            </View>
                            <View accessibilityLabel="From" style={{flex:4,backgroundColor:'#fff',flexDirection:'column',justifyContent:'center'}}>
                                <Text style={{fontSize:15,color:'#1f90cc',marginBottom:5}}>From</Text>
                                <Text style={{fontSize:18}}>20-01-2018</Text>
                            </View>
                            <View accessibilityLabel="To"  style={{flex:4,backgroundColor:'#fff',flexDirection:'column',justifyContent:'center'}}>
                                <Text style={{fontSize:15,color:'#1f90cc',marginBottom:5}}>To</Text>
                                <Text style={{fontSize:18}}>20-01-2018</Text>
                            </View>
                        </View>
                        </View>
                    </View>
                <View style={{borderColor:'red',flex:2,borderWidth:StyleSheet.hairlineWidth}}><Text>Attendance</Text></View>
                <View style={{borderColor:'red',flex:6,borderWidth:StyleSheet.hairlineWidth}}><Text>Attendance</Text></View>
                </View>
        )
    }
} 

export default withNavigation(Attendance);