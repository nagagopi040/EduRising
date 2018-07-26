import React,  { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { withNavigation } from 'react-navigation'

import profileStyles from '../../stylesheets/profileStyles'

class ProfileInfo extends Component {
    render() {
        return(
            <View style={profileStyles.profileContainer}>
                <Image source = {require('../../images/username_icon.png')} style={profileStyles.profileImage} />
                <View>
                    <Text>Anirudh</Text>
                    <Text>Class-9A </Text>
                </View>
                <Image source = {require('../../images/username_icon.png')} style={profileStyles.profileImage} />
            </View>
        )
    }
}

export default withNavigation(ProfileInfo)