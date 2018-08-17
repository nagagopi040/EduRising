import React, { Component } from 'react'
import { Text, View, Image, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { withNavigation  } from 'react-navigation'

import ExamsAndTestsNavigation from '../../navigation/ExamsAndTestsNavigation'

class ExamsAndTests extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    
    render() {
        return (
            <ExamsAndTestsNavigation />
        )
    }
}


export default withNavigation(ExamsAndTests)