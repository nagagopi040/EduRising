import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableHighlight, KeyboardAvoidingView  } from 'react-native';
import { withNavigation } from 'react-navigation'
import loginStyles from '../../stylesheets/loginStyles'

var usernameIcon = require('../../images/username_icon.png')
var passwordIcon = require('../../images/password_icon.png')

class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    onSubmit = () => {
        this.props.onSubmit(this.state.username, this.state.password)
    }

    onUsernameChange = (text) => {
        this.setState({ username : text })
        this.props.handleUsernameChange('')
    }

    onPasswordChange = (text) => {
        this.setState({ password : text })
        this.props.handlePasswordChange('')
    }

    render(){
        return(
            <View style={loginStyles.container}>
                <KeyboardAvoidingView  behavior="padding" enabled>
                <Text style={loginStyles.title}>EduRising</Text>
                <View style={loginStyles.label}>
                    <Image source={require('../../images/username_icon.png')} style={loginStyles.icon} />
                    <TextInput
                        style={loginStyles.usernametextinput}
                        autoCorrect={false}
                        placeholder="Username"
                        autoFocus={false}
                        underlineColorAndroid={'transparent'}
                        onChangeText={this.onUsernameChange}
                        returnKeyType='next'
                        onSubmitEditing={() => { this.passwordTextInput.focus() }}
                        blurOnSubmit={false}
                    />
                </View>
                <View style={loginStyles.label}>
                    <Image source={require('../../images/password_icon.png')} style={loginStyles.icon}/>
                    <TextInput 
                        style={loginStyles.usernametextinput}
                        autoCorrect={false}
                        placeholder="Password"
                        secureTextEntry={true}
                        autoFocus={false}
                        underlineColorAndroid={'transparent'}
                        onChangeText={this.onPasswordChange}
                        returnKeyType='go'
                        ref={(passwordInput) => { this.passwordTextInput = passwordInput }}


                    />
                </View>
                <Text style={loginStyles.serverError}>{this.props.serverError === '' ? null : this.props.serverError}</Text>
                <TouchableHighlight
                    style={loginStyles.signinButtonContainer}
                    onPress={ () => this.onSubmit(this.state.username, this.state.password) }
                    underlayColor='#1f90cc'>
                    <Text style={loginStyles.signinButtonText}>SIGN IN</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={this.props.handleForgotPassword}
                    underlayColor='transparent'>
                    <Text style={loginStyles.forgotPassword}y>Forgot Password ?</Text>
                </TouchableHighlight>
                <View style={loginStyles.signUp}>
                    <Text style={loginStyles.newAccount}>Don't have Account ?</Text>
                    <TouchableHighlight
                        onPress={this.props.handleSignUp} 
                        underlayColor='transparent'>
                        <Text style={loginStyles.signUpButton}>SIGN UP</Text>
                    </TouchableHighlight>
                </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

export default withNavigation(LoginForm)