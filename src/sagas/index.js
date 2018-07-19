import {
    takeEvery
} from 'redux-saga/effects'
import {
    loginAuth
} from './login/loginSagas'
import {
    LOGIN_REQUEST
} from '../actions/login/loginActionTypes'

export default function* rootSaga() {
    yield takeEvery(LOGIN_REQUEST, loginAuth)
}