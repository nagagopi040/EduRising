import { StyleSheet, Dimensions } from 'react-native'

export default styles = StyleSheet.create({
    container: {
        margin: 20,
        paddingTop:Dimensions.get('window').height * 0.10,
        flexDirection: 'column'
    },
    header: {
        width: Dimensions.get('window').width * 0.34,
        height: Dimensions.get('window').height * 0.13,
        borderColor: '#1f90cc',
        backgroundColor:'#FFFBFE',
        borderRadius: 20,
        flexDirection:"row",
        // flexWrap:'wrap',
        shadowColor:'#95C9F1',
        shadowOffset: {width: 0.5,height: 0.5},
        shadowOpacity:10,
        shadowRadius:8,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    modal: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width ,
        position: 'absolute',
        top:0,
        left:0
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
        fontSize: 18,
    }
})