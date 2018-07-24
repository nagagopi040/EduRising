import { createStackNavigator } from 'react-navigation';

import LoginPage from '../containers/login/LoginPage'
import LandingPage from '../components/landingpage/Landingpage'
import ExamsPage from '../components/exams/Exams'

export default RootStack = createStackNavigator({
    Login: LoginPage,
    Home: LandingPage,
    Exams: ExamsPage,
}, {
    initialRouteName: 'Login',
    navigationOptions: {
        header: null,
    },
});