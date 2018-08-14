import React, { Component } from 'react'
import { Text, View, Image, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation'

class Exams extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    
    render() {
        return (
            <View>
                <Text>Exams</Text>
            </View>
        )
    }
}

export default withNavigation(Exams)