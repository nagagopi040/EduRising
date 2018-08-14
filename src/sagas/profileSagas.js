import { put, call } from 'redux-saga/effects'
import axios from 'axios'

import { FETCH_USERDETAILS_REQUEST_FAILED, FETCH_USERDETAILS_REQUEST_SUCCEDED } from '../actions/profile/profileActionTypes';

export function* fetchUserInfo(action) {
    try {
        const access_token = action.access_token
        const res = yield call(axios.get, `http://10.100.100.200:8080/users/info?access_token=${access_token}`)
        if(!res.data.serverError)
            yield put({
                type: FETCH_USERDETAILS_REQUEST_SUCCEDED,
                userDetails: res.data.userInfo ? res.data.userInfo : {},
                serverError: '',
                status: "success",
            })
        else
            yield put({
                type: FETCH_USERDETAILS_REQUEST_FAILED,
                serverError: res.data.serverError,
                status: "fail",
            })
    } catch (error) {
        yield put({
            type: FETCH_USERDETAILS_REQUEST_FAILED,
            serverError: error.message,
            status: error.message,
        })
    }
}