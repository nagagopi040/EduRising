import { StyleSheet, Dimensions } from 'react-native'

export default styles = StyleSheet.create({
    profileContainer :{
        marginTop: 20,
        flexDirection: 'row',
        flex:8,
        alignItems:'center',
        marginLeft:20,
        height:Dimensions.get('window').height*0.15
    },
    nameContainer:{
        justifyContent:'flex-end',
        flexDirection:'row',
        flex:2,
        margin:30,
    },
    profileImage: {
        width: Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').width * 0.15,
    },
    notificationIconImage: {
        width: Dimensions.get('window').width * 0.11,
        height: Dimensions.get('window').width * 0.11,
    }
})