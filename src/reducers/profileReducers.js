import { FETCH_USERDETAILS_REQUEST, FETCH_USERDETAILS_REQUEST_FAILED, FETCH_USERDETAILS_REQUEST_SUCCEDED } from '../actions/profile/profileActionTypes';

const initialState = {
	requesting: null,
	requested: null
};

export default function (state = initialState, action) {
	switch (action.type) {
		case FETCH_USERDETAILS_REQUEST:
			return {
				...state,
				requesting: true,
			};
		case FETCH_USERDETAILS_REQUEST_SUCCEDED:
			return {
				...state,
				requesting: false,
				requested: true,
				userDetails: action.userDetails,
				serverError: action.serverError,
				status: action.status,
			};
		case FETCH_USERDETAILS_REQUEST_FAILED:
			return {
				...state,
				requesting: false,
				requested: false,
				userDetails: {},
				serverError: action.serverError,
				status: action.status,
			}
		default:
			return state;
	}
}