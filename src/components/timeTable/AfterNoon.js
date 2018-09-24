import React, {Component} from 'react';
import {Text, Button, View, Dimensions, TouchableHighlight} from 'react-native';
import timeTableStyles from '../../stylesheets/timeTableStyle'
const periodsVal = ['5th', '6th', '7th', '8th']
const days =['MON', 'TUE','WED','THU', 'FRI', 'SAT']
const subjectVal = ['Tamil', 'English','Maths','Science']
export default class AfterNoon extends Component {
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
                    <View style={{flexDirection:'column'}}>
                    {days.map(
                           daysVal => {
                            return(
                                <TouchableHighlight style = {timeTableStyles.rowOfSubject}>
                                <View style={timeTableStyles.noOfDays}>
                                <Text style= {{fontWeight: 'bold', fontSize: 16}}>{daysVal}</Text>
                                </View>
                                </TouchableHighlight>
                            ) 
                           }
                       )} 
                        </View>
                </View>
        )
    }
}

