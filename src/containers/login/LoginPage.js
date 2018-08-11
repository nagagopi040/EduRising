import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';

import { loginAuth } from '../../actions/login/loginActions'
import LoginForm from '../../components/login/LoginForm'
import auth from '../../utilities/auth'
import CONSTANT from '../../utilities/constant'

class LoginPage extends Component {
    constructor(){
        super()
        this.state={
            username: '',
            password: '',
            serverError: '',
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.serverError){
            this.setState({
                serverError: nextProps.serverError
            })
        } else {
            auth.onSignIn(CONSTANT.AUTHENTICATION.AUTH_TOKEN, [{ username : this.state.username , password : this.state.password }] ).then( res => {
                this.props.navigation.navigate('HomeRouter')
            })
        }
    }

    handleSubmit = (username, password) => {
        var userCredentials = { username, password }
        this.setState({
            username: username,
            password: password,
        })
        this.props.loginAuth(userCredentials)
    }

    handleForgotPassword = () => {
        console.log('navigate to forgot password')
    }
    
    handleSignUp = () => {
        console.log('navigate to sign up page')
    }

    handleUsernameChange = (error) => {
        this.setState({ serverError: error })
    }

    handlePasswordChange = (error) => {
        this.setState({ serverError: error })
    }

    render() {
        return(
            <LoginForm
                {...this.props}
                serverError={this.state.serverError}
                onSubmit={this.handleSubmit}
                handleForgotPassword={this.handleForgotPassword}
                handleSignUp={this.handleSignUp}
                handleUsernameChange={this.handleUsernameChange}
                handlePasswordChange={this.handlePasswordChange} />
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
    serverError: state.login.serverError,
    status: state.login.status
})

const mapDispatchToProps = dispatch => ({
    loginAuth: bindActionCreators(loginAuth, dispatch),
});

export default connect( mapStateToProps, mapDispatchToProps )(LoginPage)