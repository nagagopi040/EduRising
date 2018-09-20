import React,  { Component } from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import { withNavigation } from 'react-navigation'

import profileStyles from '../../stylesheets/profileStyles'
import Loader from '../common/Loader';

class ProfileInfo extends Component {
    render() {
        const { userdata } = this.props
        if(!userdata){
            return <Loader />
        }
        return(
            // <View style={profileStyles.profileContainer}>
            //     <TouchableHighlight
            //         style={profileStyles.profileImageView}
            //         onPress={ () => this.props.navigation.navigate('UserProfile', { userdata : userdata }) }
            //         underlayColor='transparent'>
            //         <Image source = {require('../../images/user.png')} style={profileStyles.profileImage} />
            //     </TouchableHighlight>
            //     <View style={profileStyles.profileContent}>
            //         <Text>{userdata.fullName}</Text>
            //         <Text>{userdata.class}</Text>
            //     </View>
            //     {/* <TouchableHighlight
            //         style={profileStyles.notificationView}
            //         onPress={ () => this.props.navigation.navigate('Notification',) }
            //         underlayColor='transparent'>
            //         <Image source = {require('../../images/notification.png')} style={profileStyles.notificationIcon} />
            //     </TouchableHighlight> */}
            // </View>


            <View style={{flexDirection:'row',flex:8}}>
                <View style={profileStyles.profileContainer}>
                    <TouchableHighlight onPress={ () => this.props.navigation.navigate('UserProfile', { userdata : userdata }) }
                            underlayColor='transparent'>
                        <Image source = {require('../../images/user.png')} style={profileStyles.profileImage} />
                    </TouchableHighlight>
                    <View>
                        <Text>{userdata.fullName}</Text>
                        <Text>{userdata.class} </Text>
                    </View>
                </View>

                </View>
        )
    }
}

export default withNavigation(ProfileInfo)