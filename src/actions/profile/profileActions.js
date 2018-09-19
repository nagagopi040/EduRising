import { FETCH_USERDETAILS_REQUEST } from './profileActionTypes';

export function fetchUserInfo(access_token) {
    return {
        type: FETCH_USERDETAILS_REQUEST,
        access_token: access_token
    }
}