import { put, call } from 'redux-saga/effects'
import axios from 'axios'

import { LOGIN_REQUEST_FAILED, LOGIN_REQUEST_SUCCEDED } from '../../actions/login/loginActionTypes';

export function* loginAuth (action) {
    try {
        const res = yield call(axios.post, 'http://172.16.99.121:3000/products/add', action.userCredentials)
        yield put({ type: LOGIN_REQUEST_SUCCEDED, userDetails: res.data})
    } catch (error) {
        yield put({ type: LOGIN_REQUEST_FAILED,  error })
    }
}