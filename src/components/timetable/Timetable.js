import React, {Component} from 'react';
import {Text, Button, View, Dimensions} from 'react-native';
import {withNavigation, createMaterialTopTabNavigator} from 'react-navigation'; 
import ForeNoon from '../timetable/ForeNoon'
import AfterNoon from '../timetable/AfterNoon'

const routeconfig = {
    Forenoon : {screen: ForeNoon},
    Afternoon: {screen: AfterNoon} 
}

const tabNavConfig = {
    tabBarPosition: 'top',
    tabBarOptions: {
        activeTintColor:'#000',
        inactiveTintColor:'#000',
        indicatorStyle: {
            backgroundColor: '#1f3b81',
            height: Dimensions.get('window').height * 0.008
        },
        style: {
            backgroundColor: '#fff'
        }
    }
}

export default timetableNav = createMaterialTopTabNavigator(routeconfig, tabNavConfig)
