import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class Exams extends Component{
    render(){
        return(
            <View>
                <Text>Exams</Text>
            </View>
        )
    }
}

export default withNavigation(Exams)