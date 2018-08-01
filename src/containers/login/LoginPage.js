import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';

import { loginAuth } from '../../actions/login/loginActions'
import LoginForm from '../../components/login/LoginForm'

class LoginPage extends Component {
    handleSubmit = (username, password) => {
        var userCredentials = { username, password }
        this.props.loginAuth(userCredentials);
        // this.forceUpdate()
    }

    handleForgotPassword = () => {
        console.log('navigate to forgot password')
    }
    handleSignUp = () => {
        console.log('navigate to sign up page')
    }

    render() {
        return(
            <View>
                <LoginForm
                    newProps= {this.props}
                    userDetails={this.props.userDetails}
                    onSubmit={this.handleSubmit}
                    handleForgotPassword={this.handleForgotPassword}
                    handleSignUp={this.handleSignUp} />
            </View>
        )
    }
}

LoginPage.propTypes = {
    loginAuth: PropTypes.func.isRequired,
    userDetails: PropTypes.object,
    message: PropTypes.string
}

const mapStateToProps = state => ({
	userDetails : state.login.userDetails
})

const mapDispatchToProps = dispatch => ({
    loginAuth: bindActionCreators(loginAuth, dispatch),
});

export default connect( mapStateToProps, mapDispatchToProps )(LoginPage)