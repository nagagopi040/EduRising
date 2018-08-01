import React, { Component } from '../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react'
import { Text, View, Image, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { withNavigation } from '../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-navigation'
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

    componentWillReceiveProps(nextProps){
        navigation.navigate('Home', { userDetails: nextProps.userDetails})
    }

    onSubmit = (navigation) => {
        this.props.onSubmit(this.state.username, this.state.password)
    }

    handleUsernameChange = (text) => {
        this.setState({ username : text })
    }

    handlePasswordChange = (text) => {
        this.setState({ password : text })
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
                        onChangeText={this.handleUsernameChange}
                    />
                </View>
                <View style={loginStyles.label}>
                    <Image source={require('../../images/password_icon.png')} style={loginStyles.icon}/>
                    <TextInput 
                        style={loginStyles.usernametextinput}
                        autoCorrect={false}
                        placeholder="Password"
                        autoFocus={false}
                        underlineColorAndroid={'transparent'}
                        onChangeText={this.handlePasswordChange}
                    />
                </View>
                <Text>{this.props.requesting ? "Loading" : null}</Text>
                <TouchableHighlight
                    style={loginStyles.signinButtonContainer}
                    onPress={ () => this.onSubmit(this.props.navigation) }
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