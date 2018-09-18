import React, { Component } from 'react'
import { Text, View, Image, TextInput, Button, TouchableHighlight, TouchableOpacity,Animated,Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation'
import Notification from '../notificationpage/notification'
import ProfileInfo from './ProfileInfo'
import homeStyles from '../../stylesheets/homeStyles'
import profileStyles from '../../stylesheets/profileStyles'


const data = ['Exams', 'TimeTable', 'HomeWork', 'Attendance', 'Events', 'Fees', 'Calendar', 'Contact Us'];
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class Landingpage extends Component {
    constructor(){
        super();
        this.state={
            modalY:new Animated.Value(-deviceHeight)
        }
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
        const userInfo = this.props.navigation.state
        console.log("userInfo", userInfo)
        return(
            <View style={{backgroundColor:'#FDFFFC'}}>
                <View>
                    <ProfileInfo />
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

export default withNavigation(Landingpage)