import { createStackNavigator } from 'react-navigation';
import React from 'react'
import { TouchableHighlight, Text, Dimensions, View } from 'react-native'

import LoginPage from '../containers/login/LoginPage'
import LandingPage from '../components/landingpage/Landingpage'
import Exams from '../components/exams/Exams'
import styles from '../stylesheets/commonStyles'

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
            // headerLeft: (
            //     <TouchableHighlight
            //         onPress={() => navigation.goBack()}
            //         underlayColor={'#444444'}
            //         style={styles.backButton}>
            //             <Text style={styles.backButtonText}>Back </Text>
            //     </TouchableHighlight>
            // ),
            // headerRight: (<View />)
        })
    },
}, {
    initialRouteName: 'Login'
});