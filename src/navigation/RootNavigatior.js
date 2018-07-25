import { createStackNavigator } from 'react-navigation';

import LoginPage from '../containers/login/LoginPage'
import LandingPage from '../components/landingpage/Landingpage'
import ExamsPage from '../components/exams/Exams'

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
        screen: ExamsPage,
        navigationOptions: {
            title: 'Exams',
            headerStyle: {
                backgroundColor: '#1f3b81',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    },
}, {
    initialRouteName: 'Login'
});