import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Dimensions } from 'react-native'

import LoginPage from '../containers/login/LoginPage'
import HomePage from '../components/home/Homepage'
import Exams from '../components/exams/Exams'

export const LoginRouter  = createStackNavigator({
    Login: {
        screen: LoginPage,
        navigationOptions: {
            header: null,
        },
    }
})

export const HomeRouter = createStackNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: {
            header: null,
        }
    },
    Exams: {
        screen: Exams,
        navigationOptions: ({navigation}) => ({
            title: 'Exams',
            headerStyle: {
                backgroundColor: '#1f3b81',               
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 24,
                alignSelf: 'center',
                marginLeft: Dimensions.get('window').width * 0.4,
            },
            headerBackTitle: 'Back',
        })
    },
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