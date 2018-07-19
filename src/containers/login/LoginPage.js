import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import LoginForm from '../../components/login/LoginForm'

class LoginPage extends Component {
    render() {
        return(
            <View>
                <LoginForm />
            </View>
        )
    }
}

export default LoginPage