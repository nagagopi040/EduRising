import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Provider } from 'react-redux';

import store from './src/store'
import RootNavigator from './src/navigation/RootNavigatior'

import LoginPage from './src/containers/login/LoginPage'

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<RootNavigator />
			</Provider>
		);
	}
}