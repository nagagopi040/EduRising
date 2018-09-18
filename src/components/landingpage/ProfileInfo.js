import React,  { Component } from 'react'
import { View, Text, Image,TouchableHighlight } from 'react-native'
import { withNavigation } from 'react-navigation'

import profileStyles from '../../stylesheets/profileStyles'

class ProfileInfo extends Component {
    render() {
        return(
            <View style={{flexDirection:'row',flex:8}}>
                <View style={profileStyles.profileContainer}>
                    <Image source = {require('../../images/username_icon.png')} style={profileStyles.profileImage} />
                    <View>
                        <Text>Anirudh</Text>
                        <Text>Class-9A </Text>
                    </View>
                </View>
               
            </View>
        )
    }
}

export default withNavigation(ProfileInfo)