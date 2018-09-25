import React, { Component } from 'react'
import { Text, View, Image, TextInput, Button,Dimensions,Animated,TouchableHighlight, TouchableOpacity, ActivityIndicator } from 'react-native';
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import API from '../../utilities/api'
import { fetchUserInfo } from '../../actions/profile/profileActions'
import ProfileInfo from './ProfileInfo'
import homeStyles from '../../stylesheets/homeStyles'
import Notification from '../notification/Notifications';
import auth from '../../utilities/auth';
import CONSTANT from '../../utilities/constant';
import Loader from '../common/Loader';
import profileStyles from '../../stylesheets/profileStyles'


const data = ['Exams', 'TimeTable', 'HomeWork', 'Attendance', 'Events', 'Fees', 'Calendar', 'Contact Us'];
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isRequesting: true,
            userdata : {},
            modalY:new Animated.Value(-deviceHeight)
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

    openModal(state) {
        Animated.timing(state.modalY, {
            duration: 300,
            toValue: 0
         }).start();
      }
    
      closeModal() {
        Animated.timing(this.state.modalY, {
            duration: 300,
            toValue: -deviceHeight
         }).start();
      }

    render() {
        if(this.state.isRequesting){
           return <Loader />
        }
        if(this.state.serverError){
            alert(this.state.serverError)
        }
        return(
            <View style={{backgroundColor:'#FDFFFC'}}>
                <View>
                <ProfileInfo userdata={this.props.userDetails}/>
                    <TouchableHighlight onPress={()=>this.openModal(this.state)} style={[profileStyles.nameContainer,{flex:2}]}>
                        <Image source = {require('../../images/username_icon.png')} style={profileStyles.notificationIconImage} />
                    </TouchableHighlight>
                </View>
            <View style={homeStyles.container}>
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
            {this.renderNotificationPage()}
            </View>
        )
    }


    renderNotificationPage(){
        return <Notification modalY={this.state.modalY} closeModal={this.closeModal.bind(this)}/>
    }

    callNotification(context){
        console.log("Came here")
        Animated.timing(context.state.modalY,{
            duration:300,
            toValue:0,
        }).start();
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