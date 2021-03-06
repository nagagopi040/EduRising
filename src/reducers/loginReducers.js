import { LOGIN_REQUEST, LOGIN_REQUEST_FAILED, LOGIN_REQUEST_SUCCEDED } from '../actions/login/loginActionTypes';

const initialState = {
	requesting: null,
	requested: null
};

export default function (state = initialState, action) {
	switch (action.type) {
		case LOGIN_REQUEST:
			return {
				...state,
				requesting: true
			};
		case LOGIN_REQUEST_SUCCEDED:
			return {
				...state,
				requesting: false,
				requested: true,
				userDetails: action.userDetails,
				serverError: null
			};
		case LOGIN_REQUEST_FAILED:
			return {
				...state,
				requesting: false,
				requested: false,
				userDetails: {},
				serverError: action.serverError,
				message: action.message,
			}
		default:
			return state;
	}
}