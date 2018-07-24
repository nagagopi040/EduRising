import { StyleSheet, Dimensions } from 'react-native'

export default styles = StyleSheet.create({
    container: {
		padding: 10,
        backgroundColor: '#1f3b81',
        height: Dimensions.get('window').height
	},
	title: {
		fontSize: 36,
		textAlign: 'center',
		fontFamily: 'monospace',
		color: '#FFFFFF',
		paddingTop: Dimensions.get('window').height * 0.15,
		paddingBottom: Dimensions.get('window').height * 0.2,
	},
	label: {
        flexDirection: 'row',
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        borderColor: '#FFFFFF',
        borderRadius: 25,
        borderWidth: 1,

    },
    usernametextinput: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        flex: 1,
        borderColor: '#FFFFFF',
        borderRadius: 25,
        borderWidth: 1,
    },
    icon: {
        width: 20,
        height: 20,
        alignItems: 'center',
        top: 15,
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
        paddingTop: Dimensions.get('window').height * 0.03,
    },
    signUp: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        paddingTop: Dimensions.get('window').height * 0.06,
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