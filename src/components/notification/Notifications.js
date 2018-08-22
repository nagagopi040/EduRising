import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class Notifications extends Component{
    render(){
        return(
            <View>
                <Text>Notification</Text>
            </View>
        )
    }
}

export default withNavigation(Notifications)