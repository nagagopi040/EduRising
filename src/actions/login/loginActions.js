import { LOGIN_REQUEST } from './loginActionTypes';

export function loginAuth(userCredentials) {
    return {
        type: LOGIN_REQUEST,
        userCredentials: userCredentials
    }
}