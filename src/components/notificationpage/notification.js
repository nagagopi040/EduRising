import React,{ Component } from 'react';
import {View,Text,Modal,Animated,Dimensions,StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation';

class Notification extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log("this.props",this)
        return(
            <Animated.View style={[ styles.modal, { transform: [{translateY: this.props.modalY}] }]}>
                    <View style={styles.notificationHeader}>
                        <Text style={styles.backButton}  onPress={()=>this.props.closeModal()}>&larr;</Text>
                        <View style={styles.flex8}>
                            <Text style={styles.notificationText}>Notification</Text>
                        </View>
                    </View>
                    <View style={styles.notificationBody}>

                        </View>
                </Animated.View>
        )
    }
}

const styles=StyleSheet.create({
    modal:{
        height:Dimensions.get('window').height,
        width:Dimensions.get('window').width,
        position:'absolute',
        backgroundColor:'#fff',
        top:0,
        left:0,
        flexDirection:'column',
        alignItems:'stretch'
    },
    notificationHeader:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        backgroundColor:'#0093C7',
        borderColor:'black',
        borderWidth:0.2,
        height:Dimensions.get('window').height*0.1
    },
    backButton:{
        fontSize:20,
        color:'#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    flex8:{
        flex:5
    },
    notificationText:{
        fontSize:20,
        textAlign:'center',
        color:'#fff'
    },
    notificationBody:{
        backgroundColor:'white',
        height:Dimensions.get('window').height*0.9
    }
})

export default withNavigation(Notification);