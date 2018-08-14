import React, { Component } from 'react'
import { Text, View, Image, TextInput, Button, TouchableHighlight, TouchableOpacity, ActivityIndicator } from 'react-native';
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import auth from '../../utilities/auth';
import CONSTANT from '../../utilities/constant';

class UserProfile extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    handleSignOut = () => {
        auth.onSignOut(CONSTANT.AUTHENTICATION.ACCESS_TOKEN)
            .then( res => {
                if(res) {
                    this.props.navigation.navigate('Login')
                }
            }).catch(err => {
                alert("something went wrong",err)
            })
    }

    render() {
        return(
            <View>
                <Text>UserProfile</Text>
                <TouchableHighlight
                    onPress={this.handleSignOut}
                    underlayColor='transparent'>
                    <Text>Logout</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default withNavigation(UserProfile)