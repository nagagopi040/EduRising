import { put, call } from 'redux-saga/effects'
import axios from 'axios'

import { LOGIN_REQUEST_FAILED, LOGIN_REQUEST_SUCCEDED } from '../actions/login/loginActionTypes';

export function* loginAuth(action) {
    try {
        const res = yield call(axios.post, 'http://192.168.1.5:8080/users/auth', action.userCredentials)
        if(!res.data.serverError)
            yield put({
                type: LOGIN_REQUEST_SUCCEDED,
                userDetails: res.data.userInfo ? res.data.userInfo : {},
                serverError: '',
                status: "success",
            })
        else
            yield put({
                type: LOGIN_REQUEST_FAILED,
                serverError: res.data.serverError,
                status: "fail", 
            })
    } catch (error) {
        yield put({
            type: LOGIN_REQUEST_FAILED,
            serverError: error.message,
            status: error.message,
        })
    }
}