import { StyleSheet, Dimensions } from 'react-native'

export default styles = StyleSheet.create({
    container: {
		flex: 1,
		padding: 10,
		backgroundColor: '#1f3b81',
	},
	welcome: {
		fontSize: 36,
		textAlign: 'center',
		fontFamily: 'monospace',
		color: '#FFFFFF',
		paddingTop: Dimensions.get('window').height * 0.15,
		paddingBottom: Dimensions.get('window').height * 0.15,
	},
})