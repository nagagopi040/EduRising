import React, { Component } from 'react'
import { Text, View, Image, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation'
import CryptoJS from 'crypto-js'

import API from '../../utilities/api'
import ProfileInfo from './ProfileInfo'
import homeStyles from '../../stylesheets/homeStyles'
import auth from '../../utilities/auth';
import CONSTANT from '../../utilities/constant';

const data = ['Exams', 'TimeTable', 'HomeWork', 'Attendance', 'Events', 'Fees', 'Calendar', 'Contact Us'];

class HomePage extends Component {
    constructor() {
        super()
        this.state ={
            credentials : {}
        }
    }
    componentDidMount() {
        auth.getTheTokens(CONSTANT.AUTHENTICATION.AUTH_TOKEN).then( res => {
                if(res !=null){
                    this.setState({ credentials : res[0] })
                    API.getUserInfo(`http://10.100.100.200:8080/users/info${this.state.credentials}`).then(res => {
                        if(res != null){
                            this.setState({
                                userdata : res.data
                            })
                            console.log(res)
                        }
                    })
                } else {
                    return null;
                }
            }).catch(err => {
                console.log(err)
            })
    }

    render() {
        const { credentials } = this.state
        console.log(credentials)
        return(
            <View style={homeStyles.container}>
                <ProfileInfo />
                <View style={homeStyles.titlesWrap}>
                    {data.map( entry => {
                        return(
                            <TouchableHighlight
                                style={homeStyles.header}
                                onPress={ () => this.props.navigation.navigate(entry) }
                                underlayColor='transparent'
                                key={entry}>
                                <View style={homeStyles.title}>
                                    <Image source={require('../../images/username_icon.png')} style={homeStyles.titleIcon} />
                                    <Text style={homeStyles.headerText}>{entry}</Text>
                                </View>
                            </TouchableHighlight>
                        )
                    })}
                </View>
            </View>
        )
    }
}

export default withNavigation(HomePage)