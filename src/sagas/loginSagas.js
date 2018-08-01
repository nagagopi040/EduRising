import { put, call } from 'redux-saga/effects'
import axios from 'axios'

import { LOGIN_REQUEST_FAILED, LOGIN_REQUEST_SUCCEDED } from '../../actions/login/loginActionTypes';

export function* loginAuth(action) {
    try {
        //const res = yield call(axios.post, 'http://10.100.100.200:3000/users', action.userCredentials)
        yield put({
            type: LOGIN_REQUEST_SUCCEDED,
            message: "Succesfully authenticated",
            userDetails: {name: 'Naga Gopi', class: '9A', image: ''}
        })
    } catch (error) {
        yield put({
            type: LOGIN_REQUEST_FAILED,
            error
        })
    }
}