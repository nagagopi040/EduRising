import React, {Component} from 'react';
import {Text, Button, View, Dimensions, TouchableHighlight, ScrollView} from 'react-native';
import timeTableStyles from '../../stylesheets/timeTableStyle';
import foreNoonJson from '../../json/foreNoonJson'
const periodsVal = ['1st', '2nd', '3rd', '4th']
export default class ForeNoon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style ={{flex:1}}>
                <View style={timeTableStyles.noOfPeroids}>
                       {periodsVal.map(
                           noOfPeriods => {
                            return(
                                <View style={timeTableStyles.periodsPerDay}>
                                <Text>{noOfPeriods}</Text>
                                </View>
                            ) 
                           }
                       )} 
                    </View>
                    <ScrollView>
                    <View style={{flex: 1, flexDirection:'column'}}>
                    {Object.values(foreNoonJson.days).map( function(data)
                            {
                                console.log("dadada", data)
                                 return Object.values(data).map((data)=> {
                                    console.log("values==", data)
                                    return(
                                        <TouchableHighlight style = {timeTableStyles.rowOfSubject}>
                                        <View style={timeTableStyles.noOfDays}>
                                        <Text style= {{fontWeight: 'bold', fontSize: 16 }}>{data}</Text>
                                        </View>
                                        </TouchableHighlight>
                                    ) 
                             })
                            
                           }
                       )} 
                        </View>
                        </ScrollView>
                </View>
        )
    }
}

