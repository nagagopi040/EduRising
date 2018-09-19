import { StyleSheet, Dimensions } from 'react-native'

export default styles = StyleSheet.create({
    mainContainer:{
        padding: 10,
        height: Dimensions.get('window').height
    },
    centerText: {
        textAlign : 'center'
    },
    backButton: {
        // backgroundColor: '#1f90cc'
    },
    backButtonText: {
        color: '#FFF',
        fontSize: 16,
    },
    loader : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    }
})