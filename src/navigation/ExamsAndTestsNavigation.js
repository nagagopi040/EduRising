import { createMaterialTopTabNavigator  } from 'react-navigation'

import Exams from '../components/exams/Exams'
import Tests from '../components/exams/Tests'

const ExamsAndTestsNavigation = createMaterialTopTabNavigator (
    {
        Tests: {
            screen : Tests,
            navigationOptions: () => ({
                tabBarLabel: 'Class Tests',
            })
        },
        Exams: Exams,
    },
    {
    tabBarOptions: {
        style:{
            backgroundColor: '#FFF',
        },
        indicatorStyle: {
            borderBottomColor: '#1f90cc',
            borderBottomWidth: 3,
        },
        activeTintColor: '#000',
        inactiveTintColor: '#000'
      },
    }
);

export default ExamsAndTestsNavigation