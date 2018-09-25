import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Dimensions, Text } from 'react-native'
import React from 'react'

import LoginPage from '../components/login/LoginForm'
import HomePage from '../components/home/Homepage'
import ExamsAndTests from '../components/exams/ExamsAndTests'
import ForgotPassword from '../components/login/ForgotPassword'
import UserProfile from '../components/userprofile/UserProfile';
import Notifications from '../components/notification/Notifications';
import TimeTable from '../components/timetable/Timetable';

export const LoginRouter  = createStackNavigator({
    Login: {
        screen: LoginPage,
        navigationOptions: {
            header: null,
        },
    },
    ForgotPassword : {
        screen : ForgotPassword,
        navigationOptions : {
            headerBackTitle: 'Back',
        }
    }
})

export const HomeRouter = createStackNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: {
            header: null,
        }
    },
    UserProfile : {
        screen: UserProfile,
        navigationOptions: {
            title: 'User Profile',
            headerStyle: {
                backgroundColor: '#1f3b81',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 24,
                alignSelf: 'center',
            },
            headerBackTitle: 'Back',
            headerRight: (
                <Text></Text>
            )
        }
    },
    Notification:{
        screen: Notifications,
        navigationOptions: {
            title: 'Notifications',
            headerStyle: {
                backgroundColor: '#1f3b81',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 24,
                alignSelf: 'center',
            },
            headerBackTitle: 'Back',
            headerRight: (
                <Text></Text>
            )
        }
    },
    ExamsAndTests: {
        screen: ExamsAndTests,
        navigationOptions: {
            title: 'Exams&Tests',
            headerStyle: {
                backgroundColor: '#1f3b81',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 24,
                alignSelf: 'center',
            },
            headerBackTitle: 'Back',
            headerRight: (
                <Text></Text>
            )
        }
    },
    TimeTable: {
        screen: TimeTable,
        navigationOptions: {
            title: 'Exams&Tests',
            headerStyle: {
                backgroundColor: '#1f3b81',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 24,
                alignSelf: 'center',
            },
            headerBackTitle: 'Back',
            headerRight: (
                <Text></Text>
            )
        }
    }
});

export const rootNavigation = (signedIn = false) =>{
    return createSwitchNavigator({
        LoginRouter: {
            screen: LoginRouter
        },
        HomeRouter: {
            screen : HomeRouter
        }
    },{
        initialRouteName: signedIn ? "HomeRouter" : "LoginRouter"
    })
}

//Test Commit