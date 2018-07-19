import React, { Component } from 'react'
import { Text, View, Image, TextInput, Button, TouchableHighlight } from 'react-native';
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

    onSubmit() {
        console.log('Success')
    }
    signUp(){
        consol.log('signUp')
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
                        underlineColorAndroid={'#ffffff'}
                        // inlineImageLeft={usernameIcon}
                    />
                </View>
                <View style={loginStyles.label}>
                    <TextInput 
                        style={loginStyles.usernametextinput}
                        autoCorrect={false}
                        placeholder=" Password"
                        autoFocus={false}
                        underlineColorAndroid={'#ffffff'}
                        // inlineImageLeft={passwordIcon}
                    />
                </View>
                <Button title='SIGN IN' color="#1f90cc" onPress={this.onSubmit} />
                <Text>Forgot Password?</Text>
                <View>
                    <Text>Don't have Account?</Text>
                    <TouchableHighlight onPress={this.sigUp}>
                        <Text>SignUp</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default (LoginFrom)