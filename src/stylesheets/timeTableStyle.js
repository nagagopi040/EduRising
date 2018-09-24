import { StyleSheet, Dimensions } from 'react-native'
export default styles = StyleSheet.create ({
    noOfPeroids: {
        flexDirection:'row', 
        marginVertical: 20, 
        paddingHorizontal: 20, 
        alignItems:'flex-start'
    },
    periodsPerDay: {
        flex:1, 
        flexDirection:'row', 
        justifyContent: 'flex-end', 
        alignItems: 'flex-start'
    },
    noOfDays: {
        flexDirection:'row',
        padding: 10, 
        alignItems:'flex-start'
    },
    rowOfSubject: {
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#ccc',
        marginHorizontal: 5,
        marginVertical: 5,
        backgroundColor: '#fff'
    }
})