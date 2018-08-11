import React, { Component } from 'react'
import { Text, View, Image, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'

import API from '../../utilities/api'
import ProfileInfo from './ProfileInfo'
import homeStyles from '../../stylesheets/homeStyles'
import auth from '../../utilities/auth';
import CONSTANT from '../../utilities/constant';

const data = ['Exams', 'TimeTable', 'HomeWork', 'Attendance', 'Events', 'Fees', 'Calendar', 'Contact Us'];

class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            credentials : {},
            userdata : {},
        }
    }
    componentDidMount() {
        auth.getTheTokens(CONSTANT.AUTHENTICATION.AUTH_TOKEN).then( res => {
            console.log(res)
                if(res !=null){
                    this.setState({ credentials : res[0] })
                    
                } else {
                    return null;
                }
            }).catch(err => {
                console.log(err)
            })
    }

     fetchUserData = (credentials) => {
        API.getApiCall(`http://192.168.1.5:8080/users/info${credentials}`)
            .then(dataset => {
                if(dataset != null){
                    this.setState({
                        userdata : dataset.data
                    })
                }
            })
            .catch( err => {
                this.setState({ error : err })
            })
        }

    render() {
        const { credentials } = this.state
        const userdata = this.fetchUserData(credentials)
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

export default connect()(withNavigation(HomePage))