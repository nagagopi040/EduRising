import { StyleSheet, Dimensions } from 'react-native'

export default styles = StyleSheet.create({
    profileContainer :{
        margin: 20,
        flexDirection: 'row',
    },
    profileImage: {
        width: Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').width * 0.15,
        margin: 10
    },
    profileImageView : {
        borderColor: '#FFF',
        borderWidth: 1,
        borderRadius: 20,
    },
    profileContent : {
        marginLeft : 20,
        marginRight: 20,
        marginTop: 10,
    },
    notificationView : {
        marginLeft : 'auto',
    },
    notificationIcon : {
        width: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').width * 0.1,
        marginTop : 10,
    }
})