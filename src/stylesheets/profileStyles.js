import { StyleSheet, Dimensions } from 'react-native'

export default styles = StyleSheet.create({
    profileContainer :{
        margin: 20,
        flexDirection: 'row',
    },
    profileImage: {
        width: Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').width * 0.15,
    }
})