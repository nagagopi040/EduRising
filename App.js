import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { ActivityIndicator } from 'react-native'

import store from './src/store'
import { rootNavigation } from './src/navigation/RootNavigatior'
import auth from './src/utilities/auth'
import CONSTANT from './src/utilities/constant'

export default class App extends Component {
	constructor(){
		super()
		this.state = {
			signedIn : false,
		}
	}

	componentDidMount(){
		// auth.onSignOut(CONSTANT.AUTHENTICATION.AUTH_TOKEN)
		auth.isSignedIn(CONSTANT.AUTHENTICATION.AUTH_TOKEN).then( res => {
			this.setState({ signedIn : res })
		}).catch(err => {
			console.log(err)
		})
	}

	render() {
		const {signedIn} = this.state
		const RootNavigator = rootNavigation(signedIn)
		return (
			<Provider store={store}>
				<RootNavigator />
			</Provider>
		);
	}
}