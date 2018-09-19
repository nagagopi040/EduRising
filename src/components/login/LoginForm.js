import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { loginAuth } from '../../actions/login/loginActions'
import auth from '../../utilities/auth'
import CONSTANT from '../../utilities/constant'
import loginStyles from '../../stylesheets/loginStyles'

const username_icon = require('../../images/username_icon.png')
const password_icon = require('../../images/password_icon.png')

class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            username : '',
            password : '',
            serverError : ''
        }
    }

    navigateToHome = (access_token) => {
        auth.onSignIn(CONSTANT.AUTHENTICATION.ACCESS_TOKEN, access_token)
            .then( res => {
                if(res){
                    this.props.navigation.navigate('Home')
                }
            })
            .catch(err => {
                this.setState({
                    serverError: err.message
                })
            })
    }

    handleSubmit = (username, password) => {
        var userCredentials = { username, password }
        this.props.loginAuth(userCredentials)
    }
    
    render(){
        const { access_token, requesting } = this.props
        return(
            <View style={loginStyles.container}>
            {access_token ? 
                this.navigateToHome(access_token)
                :
                <KeyboardAvoidingView behavior="position" enabled>
                    <Text style={loginStyles.title}>EduRising</Text>
                    <View style={loginStyles.label}>
                        <Image source={username_icon} style={loginStyles.icon} />
                        <TextInput
                            style={loginStyles.usernametextinput}
                            autoCorrect={false}
                            placeholder="Username"
                            autoFocus={false}
                            underlineColorAndroid={'transparent'}
                            onChangeText={(username) => { this.setState({ username : username, serverError : '' }) }}
                            returnKeyType='next'
                            onSubmitEditing={() => { this.passwordTextInput.focus() }}
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={loginStyles.label}>
                        <Image source={password_icon} style={loginStyles.icon}/>
                        <TextInput 
                            style={loginStyles.usernametextinput}
                            autoCorrect={false}
                            placeholder="Password"
                            secureTextEntry={true}
                            autoFocus={false}
                            underlineColorAndroid={'transparent'}
                            onChangeText={(password) => { this.setState({ password : password, serverError : '' }) }}
                            returnKeyType='go'
                            ref={(passwordInput) => { this.passwordTextInput = passwordInput }}
                        />
                    </View>
                    <Text style={loginStyles.serverError}>{this.props.serverError === '' ? null : this.props.serverError}</Text>
                    <TouchableHighlight
                        style={loginStyles.signinButtonContainer}
                        onPress={ () => this.handleSubmit(this.state.username, this.state.password) }
                        underlayColor='#1f90cc'>
                        <Text style={loginStyles.signinButtonText}>SIGN IN</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => this.props.navigation.navigate('ForgotPassword')}
                        underlayColor='transparent'>
                        <Text style={loginStyles.forgotPassword}y>Forgot Password ?</Text>
                    </TouchableHighlight>
                    <View style={loginStyles.signUp}>
                        <Text style={loginStyles.newAccount}>Don't have Account ?</Text>
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('SignUp')}
                            underlayColor='transparent'>
                            <Text style={loginStyles.signUpButton}>SIGN UP</Text>
                        </TouchableHighlight>
                    </View>
                </KeyboardAvoidingView>
            }
            </View>
            )
    }
}

const mapStateToProps = state => ({
    access_token : state.login.access_token,
    serverError: state.login.serverError,
    status: state.login.status,
    requesting : state.login.requesting
})

const mapDispatchToProps = dispatch => ({
    loginAuth: bindActionCreators(loginAuth, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(LoginForm))