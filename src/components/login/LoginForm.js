import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableHighlight, KeyboardAvoidingView  } from 'react-native';
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { loginAuth } from '../../actions/login/loginActions'
import auth from '../../utilities/auth'
import CONSTANT from '../../utilities/constant'
import loginStyles from '../../stylesheets/loginStyles'

class LoginForm extends Component {
    constructor(){
        super()
        this.state = {
            username : '',
            password : '',
            serverError : ''
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.serverError){
            this.setState({
                serverError: nextProps.serverError
            })
        } else {
            auth.onSignIn(CONSTANT.AUTHENTICATION.AUTH_TOKEN, { username : this.state.username , password : this.state.password } ).then( res => {
                this.props.navigation.navigate('HomeRouter', res)
            })
        }
    }

    handleSubmit = (username, password) => {
        var userCredentials = { username, password }
        this.props.loginAuth(userCredentials)
    }

    handleForgotPassword = () => {
        console.log('navigate to forgot password')
    }
    
    handleSignUp = () => {
        console.log('navigate to sign up page')
    }

    onUsernameChange = (text) => {
        this.setState({ username : text, serverError : '' })
    }

    onPasswordChange = (text) => {
        this.setState({ password : text, serverError : '' })
    }

    render(){
        return(
            <View style={loginStyles.container}>
                <KeyboardAvoidingView  behavior="position" enabled>
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
                <Text style={loginStyles.serverError}>{this.state.serverError === '' ? null : this.state.serverError}</Text>
                <TouchableHighlight
                    style={loginStyles.signinButtonContainer}
                    onPress={ () => this.handleSubmit(this.state.username, this.state.password) }
                    underlayColor='#1f90cc'>
                    <Text style={loginStyles.signinButtonText}>SIGN IN</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={this.handleForgotPassword}
                    underlayColor='transparent'>
                    <Text style={loginStyles.forgotPassword}y>Forgot Password ?</Text>
                </TouchableHighlight>
                <View style={loginStyles.signUp}>
                    <Text style={loginStyles.newAccount}>Don't have Account ?</Text>
                    <TouchableHighlight
                        onPress={this.handleSignUp} 
                        underlayColor='transparent'>
                        <Text style={loginStyles.signUpButton}>SIGN UP</Text>
                    </TouchableHighlight>
                </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    userDetails : state.login.userDetails,
    serverError: state.login.serverError,
    status: state.login.status
})

const mapDispatchToProps = dispatch => ({
    loginAuth: bindActionCreators(loginAuth, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(LoginForm))