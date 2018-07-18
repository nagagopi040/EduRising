import { LOGIN_REQUEST, LOGIN_REQUEST_FAILED, LOGIN_REQUEST_SUCCEDED } from '../actions/LOGINTypes';

const initialState = {
    requesting: null,
    requested: null
};

export default function(state = initialState, action) {
	switch (action.type){
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
				LOGIN: action.payload
			};
		case LOGIN_REQUEST_FAILED:
			return {
				...state,
				requesting: false,
				requested: false,
				error: action.error
			}
		default:
			return state;
	}
}