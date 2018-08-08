import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';

import { loginAuth } from '../../actions/login/loginActions'
import LoginForm from '../../components/login/LoginForm'

class LoginPage extends Component {
    constructor(){
        super()
        this.state={
            serverError: '',
        }
    }

    handleSubmit = (username, password) => {
        var userCredentials = { username, password }
        this.props.loginAuth(userCredentials);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.serverError){
            this.setState({
                serverError: nextProps.serverError
            })
        } else {
            this.props.navigation.navigate('Home', {userDetails: nextProps.userDetails})
        }
    }

    handleForgotPassword = () => {
        console.log('navigate to forgot password')
    }
    handleSignUp = () => {
        console.log('navigate to sign up page')
    }

    handleUsernameChange = (error) => {
        this.setState({ serverError: '' })
    }

    handlePasswordChange = (error) => {
        this.setState({ serverError: '' })
    }

    render() {
        return(
            <View>
                <LoginForm
                    {...this.props}
                    onSubmit={this.handleSubmit}
                    handleForgotPassword={this.handleForgotPassword}
                    handleSignUp={this.handleSignUp}
                    handleUsernameChange={this.handleUsernameChange}
                    handlePasswordChange={this.handlePasswordChange} />
            </View>
        )
    }
}

LoginPage.propTypes = {
    loginAuth: PropTypes.func.isRequired,
    userDetails: PropTypes.object,
    message: PropTypes.string,
    serverError: PropTypes.string
}

const mapStateToProps = state => ({
    userDetails : state.login.userDetails,
    message: state.login.message,
    serverError: state.login.serverError,
})

const mapDispatchToProps = dispatch => ({
    loginAuth: bindActionCreators(loginAuth, dispatch),
});

export default connect( mapStateToProps, mapDispatchToProps )(LoginPage)