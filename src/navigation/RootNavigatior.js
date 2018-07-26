import { createStackNavigator } from 'react-navigation';
import React from 'react'
import { Button } from 'react-native'

import LoginPage from '../containers/login/LoginPage'
import LandingPage from '../components/landingpage/Landingpage'
import Exams from '../components/exams/Exams'

export default RootStack = createStackNavigator({
    Login: {
        screen: LoginPage,
        navigationOptions: {
            header: null,
        },
    },
    Home: {
        screen: LandingPage,
        navigationOptions: {
            header: null,
        }
    },
    Exams: {
        screen: Exams,
        navigationOptions: {
            title: 'Exams',
            headerStyle: {
                backgroundColor: '#1f3b81',                
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
            },
            headerLeft: (
                <Button
                  onPress={() => this.props.navigation.goBack()}
                  title="Back"
                  color="black"
                />
            ),
        }
    },
}, {
    initialRouteName: 'Login'
});