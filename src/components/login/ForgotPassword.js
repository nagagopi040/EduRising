import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableHighlight, KeyboardAvoidingView  } from 'react-native';
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class ForgotPassword extends Component {
    render(){
        return(
            <View style={{ flexDirection: 'row'}}>
                <KeyboardAvoidingView  behavior="position" enabled>
                    <TextInput
                        style={{flexDirection: 'column', justifyContent: 'center'}}
                        autoCorrect={false}
                        placeholder="Username"
                        autoFocus={false}
                        underlineColorAndroid={'transparent'}
                        onChangeText={this.onUsernameChange}
                        returnKeyType='go'
                    />
                    <TouchableHighlight
                        style={{flexDirection: 'column', justifyContent: 'center'}}
                        onPress={ () => console.log("signup") }
                        underlayColor='#1f90cc'>
                        <Text>Reset Password</Text>
                    </TouchableHighlight>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

// const mapDispatchToProps = dispatch => ({
//     resetPassword: bindActionCreators(resetPassword, dispatch),
// });

export default withNavigation(ForgotPassword)

