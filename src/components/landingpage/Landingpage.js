import React, { Component } from 'react'
import { Text, View, Image, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation'

class Landingpage extends Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#1f3b81',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        return(
            <View>
                <Text> Landing Page </Text>
                <Button
                    title="Exams"
                    onPress={() => this.props.navigation.navigate('Exams')}
                    />
                <Button
                    title="Time Table"
                    onPress={() => this.props.navigation.navigate('Exams')}
                    />
                <Button
                    title="Home Work"
                    onPress={() => this.props.navigation.navigate('Homework')}
                    />
            </View>
        )
    }
}

export default withNavigation(Landingpage)