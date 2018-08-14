import { StyleSheet, Dimensions } from 'react-native'

export default styles = StyleSheet.create({
    container: {
        margin: 20,
        flexDirection: 'column',
    },
    header: {
        width: Dimensions.get('window').width * 0.35,
        height: Dimensions.get('window').height * 0.13,
        borderColor: '#1f90cc',
        borderRadius: 20,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: Dimensions.get('window').width * 0.05,
        marginRight: Dimensions.get('window').width * 0.05,
        marginBottom: Dimensions.get('window').width * 0.045,
        marginTop: Dimensions.get('window').width * 0.045,
    },
    titlesWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    title: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleIcon: {
        height: 25,
        width: 25
    },
    headerText: {
        textAlign: 'center',
        fontSize: 24,
    }
})