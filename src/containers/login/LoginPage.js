import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import LoginForm from '../../components/login/LoginForm'

class LoginPage extends Component {
    onSubmit(){
        console.log(this.props.navigation)
        // this.props.navigation.navigate('Home')
    }

    handleForgotPassword(){
        console.log('navigate to forgot password')
    }
    handleSignUp () {
        console.log('navigate to sign up page')
    }

    render() {
        return(
            <View>
                <LoginForm 
                    onSubmit={this.onSubmit}
                    handleForgotPassword={this.handleForgotPassword}
                    handleSignUp={this.handleSignUp} />
            </View>
        )
    }
}

export default LoginPage