import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store'

import LoginPage from './src/containers/login/LoginPage'
import styles from './src/stylesheets/commonStyles'

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