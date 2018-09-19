import React, { Component } from 'react'
import { Text, View, Image, TextInput, Button, TouchableHighlight, TouchableOpacity, ActivityIndicator } from 'react-native';
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import API from '../../utilities/api'
import { fetchUserInfo } from '../../actions/profile/profileActions'
import ProfileInfo from './ProfileInfo'
import homeStyles from '../../stylesheets/homeStyles'
import auth from '../../utilities/auth';
import CONSTANT from '../../utilities/constant';
import Loader from '../common/Loader';

const data = ['ExamsAndTests', 'TimeTable', 'HomeWork', 'Attendance', 'Events', 'Fees', 'Calendar', 'Contact Us'];

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isRequesting: true,
            userdata : {},
        }
    }

    componentDidMount(){
        auth.getTheToken(CONSTANT.AUTHENTICATION.ACCESS_TOKEN)
            .then( res => {
                if(res!=null){
                    this.props.fetchUserInfo(res)
                    this.setState({ isRequesting : false })              
                } else {
                    this.setState({ isRequesting : false })
                    return null;
                }
            }).catch(err => {
                this.setState({ serverError : err, isRequesting : false })
            })
    }

    render() {
        if(this.state.isRequesting){
           return <Loader />
        }
        if(this.state.serverError){
            alert(this.state.serverError)
        }
        return(
            <View style={homeStyles.container}>
                <ProfileInfo userdata={this.props.userDetails}/>
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

const mapStateToProps = state => ({
    userDetails : state.profile.userDetails,
    serverError: state.profile.serverError,
    status: state.profile.status,
    requesting : state.profile.requesting
})

const mapDispatchToProps = dispatch => ({
    fetchUserInfo: bindActionCreators(fetchUserInfo, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(HomePage))