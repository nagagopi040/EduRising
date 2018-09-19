import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class TimeTable extends Component{
    render(){
        return(
            <View>
                <Text> TimeTable </Text>
            </View>
        )
    }
}

export default withNavigation(TimeTable)