import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store'

import LoginPage from './src/containers/login/LoginPage'

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<Text style={styles.welcome}>EduRising</Text>
					<LoginPage />
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
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
		paddingTop: Dimensions.get('window').height * 0.2,
		paddingBottom: Dimensions.get('window').height * 0.2,
	},
});
