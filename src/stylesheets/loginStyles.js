import { StyleSheet, Dimensions } from 'react-native'

export default styles = StyleSheet.create({
	label: {
        flexDirection: 'row',
        padding: 5,
        paddingRight: 20,
        paddingLeft: 20,
    },
    usernametextinput: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        borderWidth:1,
        flex: 1,
        borderRadius: 25,
    },
    signinButtonContainer: {
        flexDirection:'column',
        height: 50,
        marginRight: 25,
        marginLeft: 25,
        marginTop: 30,
        backgroundColor: '#1f90cc',        
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#1f90cc',
    },
    signinButtonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        padding: 10,
        fontSize: 16,
    },
    forgotPassword: {
        textAlign: 'center',
        color: "#FFFFFF",
        paddingTop: 20,
    },
    forgotPasswordTouvhable: {
        
    },
    signUp: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        paddingTop: Dimensions.get('window').height * 0.1,
    },
    newAccount: {
        color: '#FFFFFF',
        textAlign: 'center'
    },
    signUpButton: {
        color: '#2e91c7',
        textAlign: 'center',
        paddingLeft: 10,
    }
});