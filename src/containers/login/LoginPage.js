import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import LoginForm from '../../components/login/LoginForm'

class LoginPage extends Component {
    onSubmit(){
        console.log('Success')
    }
    render() {
        return(
            <View>
                <LoginForm onSubmit={this.onSubmit}/>
            </View>
        )
    }
}

export default LoginPage