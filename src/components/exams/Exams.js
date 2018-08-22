import React, { Component } from 'react'
import { Text, View, Image, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation'

class Exams extends Component {
    render() {
        return (
            <View>
                <Text>Exams</Text>
            </View>
        )
    }
}

export default withNavigation(Exams)