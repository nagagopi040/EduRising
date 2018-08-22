import React, { Component } from 'react'
import { Text, View, Image, TextInput, Button, TouchableHighlight, TouchableOpacity, ActivityIndicator } from 'react-native';
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import styles from '../../stylesheets/commonStyles'
import userStyles from '../../stylesheets/userStyles'
import auth from '../../utilities/auth';
import CONSTANT from '../../utilities/constant';
import { fetchUserInfo } from '../../actions/profile/profileActions'

class UserProfile extends Component {
    handleSignOut = () => {
        auth.onSignOut(CONSTANT.AUTHENTICATION.ACCESS_TOKEN)
            .then( res => {
                if(res) {
                    return true
                }
            }).catch(err => {
                alert("something went wrong",err)
            })
    }

    render() {
        const { userdata } = this.props.navigation.state.params
        return(
            <View style={styles.mainContainer}>
                <View style={userStyles.profileContainer} >
                    <View style={userStyles.profileImageContainer}>
                        <Image source={require('../../images/user.png')} style={userStyles.profileImage}/>
                    </View>
                </View>
                <View>
                    <Text style={[styles.centerText, userStyles.text24]}>{userdata.fullName} | {userdata.studentID}</Text>
                    <Text style={[styles.centerText, userStyles.text20]}></Text>
                    <Text style={[styles.centerText, userStyles.text20]}>{userdata.email}</Text>
                    <Text style={[styles.centerText, userStyles.text20]}>{userdata.class}</Text>
                </View>
                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate({routeName : 'LoginRouter'})}
                    underlayColor='transparent'>
                    <Text style={[styles.centerText]}>Logout</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default withNavigation(UserProfile)