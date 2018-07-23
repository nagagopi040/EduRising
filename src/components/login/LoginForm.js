import React, { Component } from 'react'
import { Text, View, Image, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native';

import loginStyles from '../../stylesheets/loginStyles'
var usernameIcon = require('../../images/username_icon.png')
var passwordIcon = require('../../images/password_icon.png')

class LoginFrom extends Component {
    constructor(props){
        super(props)
        this.state = {
            Username: '',
            Password: '',
        }
    }

    render(){
        return(
            <View>
                <View style={loginStyles.label}>
                    <TextInput
                        style={loginStyles.usernametextinput}
                        autoCorrect={false}
                        placeholder=" Username"
                        autoFocus={false}
                        underlineColorAndroid={'transparent'}
                        // inlineImageLeft={usernameIcon}
                    />
                </View>
                <View style={loginStyles.label}>
                    <TextInput 
                        style={loginStyles.usernametextinput}
                        autoCorrect={false}
                        placeholder=" Password"
                        autoFocus={false}
                        underlineColorAndroid={'transparent'}
                        // inlineImageLeft={passwordIcon}
                    />
                </View>
                <TouchableOpacity
                    style={loginStyles.signinButtonContainer}
                    onPress={this.props.onSubmit}
                    underlayColor='#fff'>
                    <Text style={loginStyles.signinButtonText}>SIGN IN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.handleForgotPassword} style={loginStyles.forgotPasswordTouchable}>
                    <Text style={loginStyles.forgotPassword}y>Forgot Password ?</Text>
                </TouchableOpacity>
                <View style={loginStyles.signUp}>
                    <Text style={loginStyles.newAccount}>Don't have Account ?</Text>
                    <TouchableOpacity onPress={this.props.handleSignUp} >
                        <Text style={loginStyles.signUpButton}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default (LoginFrom)