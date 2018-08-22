import { put, call } from 'redux-saga/effects'
import axios from 'axios'

import { LOGIN_REQUEST_FAILED, LOGIN_REQUEST_SUCCEDED } from '../actions/login/loginActionTypes';

export function* loginAuth(action) {
    try {
        const res = yield call(axios.post, 'http://10.100.100.200:8080/users/auth', action.userCredentials)
        console.log(action.userCredentials, res.data)
        if(!res.data.serverError)
            yield put({
                type: LOGIN_REQUEST_SUCCEDED,
                userDetails: res.data.userInfo ? res.data.userInfo : {},
            })
        else
            yield put({
                type: LOGIN_REQUEST_FAILED,
                serverError: res.data.serverError,
                message: "Authentication Failed",
            })
    } catch (error) {
        yield put({
            type: LOGIN_REQUEST_FAILED,
            serverError: error,
            message: error.message,
        })
    }
}