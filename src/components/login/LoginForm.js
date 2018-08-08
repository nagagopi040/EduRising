import React, { Component } from 'react'
import { Text, View, Image, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
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
            serverError: '',
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.serverError)
            this.setState({
                serverError: nextProps.serverError ? nextProps.serverError : null
            })
    }

    onSubmit = () => {
        this.props.onSubmit(this.state.username, this.state.password)
    }

    onUsernameChange = (text) => {
        this.setState({ username : text, serverError : null })
        this.props.handleUsernameChange(null)
    }

    onPasswordChange = (text) => {
        this.setState({ password : text, serverError: null })
        this.props.handlePasswordChange(null)
    }

    render(){
        return(
            <View style={loginStyles.container}>
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
                        returnKeyType='go'
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
                    />
                </View>
                <Text style={loginStyles.serverError}>{this.props.Error ==='' ? null : this.state.serverError}</Text>
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
            </View>
        )
    }
}

export default withNavigation(LoginForm)