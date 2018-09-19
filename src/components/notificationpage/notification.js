import React,{ Component } from 'react';
import {View,Text,Modal,Animated,Image,Dimensions,StyleSheet} from 'react-native';
import notificationJson from '../../json/notificationJson';
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
                        {notificationJson.today.map((data,key) => {
                            return (
                                <View style={{
                                    borderColor:'#0093C7',
                                    borderWidth:1.3,
                                    borderRadius:10,
                                    shadowColor:'#95C9F1',
                                    shadowOffset: {width: 0.7,height: 0.7},
                                    shadowOpacity:5,
                                    shadowRadius:5,
                                    flexDirection:'row',
                                    marginVertical:Dimensions.get('window').height*0.03,
                                    padding:10,
                                    }}>
                                    <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
                                        <Image source = {require('../../images/notification.png')} style={{ width: Dimensions.get('window').width * 0.11,
                                                    height: Dimensions.get('window').width * 0.11}} />
                                    </View>
                                    <View style={{flex:8,flexDirection:'column'}}>
                                        <Text style={{fontSize:15,color:"#0093C7",marginBottom:7}}>{data.noteHeader}</Text>
                                        <Text style={{fontSize:13}}>{data.note}</Text>
                                    </View>
                                    </View>
                        )
                        })}
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
        // alignItems:'stretch'
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
        height:Dimensions.get('window').height*0.9,
        justifyContent:'flex-start',
        alignItems:'center',
        padding:10
    }
})

export default withNavigation(Notification);