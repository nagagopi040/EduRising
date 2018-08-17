import { StyleSheet, Dimensions } from 'react-native'

export default styles = StyleSheet.create({
    profileContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    profileImageContainer:{
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').width * 0.4,
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius:  Dimensions.get('window').width * 0.4/2,
    },
    profileImage: {
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').width * 0.3,
        margin: 20,
    },
    text24 : {
        fontSize: 24,
        paddingTop: 10,
    },
    text20 : {
        fontSize: 20,
        paddingTop: 10,
    }
})