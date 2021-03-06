import React, { Component } from 'react'
import { Text, View, Image, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation'

import ProfileInfo from './ProfileInfo'
import homeStyles from '../../stylesheets/homeStyles'

const data = ['Exams', 'TimeTable', 'HomeWork', 'Attendance', 'Events', 'Fees', 'Calendar', 'Contact Us'];

class Landingpage extends Component {
    render() {
        const userInfo = this.props.navigation.state
        console.log("userInfo", userInfo)
        return(
            <View style={{backgroundColor:'#FDFFFC'}}>
                <ProfileInfo />
            <View style={homeStyles.container}>
                
                <View style={homeStyles.titlesWrap}>
                    {data.map( entry => {
                        return(
                            <TouchableHighlight
                                style={homeStyles.header}
                                onPress={ () => this.props.navigation.navigate(entry) }
                                underlayColor='transparent'
                                key={entry}>
                                <View style={homeStyles.title}>
                                    <Image source={require('../../images/username_icon.png')} style={homeStyles.titleIcon} />
                                    <Text style={homeStyles.headerText}>{entry}</Text>
                                </View>
                            </TouchableHighlight>
                        )
                    })}
                </View>
            </View>
            </View>
        )
    }
}

export default withNavigation(Landingpage)