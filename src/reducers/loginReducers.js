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
				requesting: true,
			};
		case LOGIN_REQUEST_SUCCEDED:
			return {
				...state,
				requesting: false,
				requested: true,
				access_token: action.access_token,
				serverError: action.serverError,
				status: action.status,
			};
		case LOGIN_REQUEST_FAILED:
			return {
				...state,
				requesting: false,
				requested: false,
				access_token: '',
				serverError: action.serverError,
				status: action.status,
			}
		default:
			return state;
	}
}