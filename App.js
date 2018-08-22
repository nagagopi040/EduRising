import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { ActivityIndicator } from 'react-native'
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import store from './src/store'
import { rootNavigation } from './src/navigation/RootNavigation'
import auth from './src/utilities/auth'
import CONSTANT from './src/utilities/constant'
import Loader from './src/components/common/Loader';

export default class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			isRequesting : true,
			isSignedIn : false
		}
	}

	componentDidMount() {
		auth.isSignedIn(CONSTANT.AUTHENTICATION.ACCESS_TOKEN)
            .then( res => {
                if(res){
					this.setState({ isSignedIn: res, isRequesting : false })
                } else {
                    this.setState({ isSignedIn: false, isRequesting : false })
                }
            }).catch(err => {
                this.setState({ serverError : err , isRequesting : false })
            })
	}

	render() {
		const { isSignedIn, isRequesting } = this.state
		const RootNavigation = rootNavigation(isSignedIn)
		if(isRequesting){
			return <Loader />
		}
		return (
			<Provider store={store}>
				<RootNavigation />
			</Provider>
		);
	}
}