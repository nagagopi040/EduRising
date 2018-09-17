import React,  { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { withNavigation } from 'react-navigation'

import profileStyles from '../../stylesheets/profileStyles'

class ProfileInfo extends Component {
    render() {
        return(
            <View style={{flexDirection:'row'}}>
                <View style={profileStyles.profileContainer}>
                    <Image source = {require('../../images/username_icon.png')} style={profileStyles.profileImage} />
                    <View>
                        <Text>Anirudh</Text>
                        <Text>Class-9A </Text>
                    </View>
                </View>
                <View style={profileStyles.nameContainer}>
                    <Image source = {require('../../images/username_icon.png')} style={profileStyles.notificationIconImage} />
                    </View>
            </View>
        )
    }
}

export default withNavigation(ProfileInfo)