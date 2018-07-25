import React, { Component } from 'react'
import { Text, View, Image, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation'

import ProfileInfo from './ProfileInfo'
import homeStyles from '../../stylesheets/homeStyles'

const data = [{
    title: 'Exams'
}, {
    title: 'Timetable'
}, {
    title: 'HomeWork'
}, {
    title: 'Attendance'
}, {
    title: 'Events'
}, {
    title: 'Fees'
}, {
    title: 'Calendar'
}, {
    title: 'Contact Us'
}]

const titleBox = data.map( (entry, index) => {
    console.log(entry, index)
    return(
        <View>
            {index%2 == 0 ? <Text></Text> : null}
        </View>
    )
})


class Landingpage extends Component {
    render() {
        return(
            <View style={homeStyles.container}>
                <ProfileInfo />
                {titleBox}
                <View style={{flexDirection: 'row'}}>
                    <TouchableHighlight
                        style={homeStyles.header}
                        onPress={ () => this.props.navigation.navigate('Exams') }
                        underlayColor='transparent'>
                        <View style={homeStyles.title}>
                            <Image source={require('../../images/username_icon.png')} style={homeStyles.titleIcon} />
                            <Text style={homeStyles.headerText}>Exams</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={homeStyles.header}
                        onPress={ () => this.props.navigation.navigate('Timetable') }
                        underlayColor='transparent'>
                        <View style={homeStyles.title}>
                            <Image source={require('../../images/username_icon.png')} style={homeStyles.titleIcon} />
                            <Text style={homeStyles.headerText}>Timetable</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableHighlight
                        style={homeStyles.header}
                        onPress={ () => this.props.navigation.navigate('HomeWork') }
                        underlayColor='transparent'>
                        <View style={homeStyles.title}>
                            <Image source={require('../../images/username_icon.png')} style={homeStyles.titleIcon} />
                            <Text style={homeStyles.headerText}>HomeWork</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={homeStyles.header}
                        onPress={ () => this.props.navigation.navigate('Attendance') }
                        underlayColor='transparent'>
                        <View style={homeStyles.title}>
                            <Image source={require('../../images/username_icon.png')} style={homeStyles.titleIcon} />
                            <Text style={homeStyles.headerText}>Attendance</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableHighlight
                        style={homeStyles.header}
                        onPress={ () => this.props.navigation.navigate('Events') }
                        underlayColor='transparent'>
                        <View style={homeStyles.title}>
                            <Image source={require('../../images/username_icon.png')} style={homeStyles.titleIcon} />
                            <Text style={homeStyles.headerText}>Events</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={homeStyles.header}
                        onPress={ () => this.props.navigation.navigate('Fees') }
                        underlayColor='transparent'>
                        <View style={homeStyles.title}>
                            <Image source={require('../../images/username_icon.png')} style={homeStyles.titleIcon} />
                            <Text style={homeStyles.headerText}>Fees</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableHighlight
                        style={homeStyles.header}
                        onPress={ () => this.props.navigation.navigate('Calendar') }
                        underlayColor='transparent'>
                        <View style={homeStyles.title}>
                            <Image source={require('../../images/username_icon.png')} style={homeStyles.titleIcon} />
                            <Text style={homeStyles.headerText}>Calendar</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={homeStyles.header}
                        onPress={ () => this.props.navigation.navigate('ContactUs') }
                        underlayColor='transparent'>
                        <View style={homeStyles.title}>
                            <Image source={require('../../images/username_icon.png')} style={homeStyles.titleIcon} />
                            <Text style={homeStyles.headerText}>Contact Us</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default withNavigation(Landingpage)