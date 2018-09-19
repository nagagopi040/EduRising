import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class Tests extends Component{
    render(){
        return(
            <View>
                <Text>Tests</Text>
            </View>
        )
    }
}

export default withNavigation(Tests)