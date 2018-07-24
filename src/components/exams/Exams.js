import React, { Component } from 'react'
import { Text, View, Image, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native';

class Exams extends Component {
    static navigationOptions = {
        title: 'Exams',
        headerLeft: (
            <Button
              onPress={() => this.props.navigation.goBack()}
              title="Back"
              color="#fff"
            />
        ),
    };

    render() {
        return (
            <View>
                <Text>Exams</Text>
            </View>
        )
    }
}

export default Exams