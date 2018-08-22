import { takeEvery } from 'redux-saga/effects'
import { loginAuth } from './loginSagas'
import { fetchUserInfo } from './profileSagas'
import { LOGIN_REQUEST } from '../actions/login/loginActionTypes'
import { FETCH_USERDETAILS_REQUEST } from '../actions/profile/profileActionTypes'

export default function* rootSaga() {
    yield takeEvery(LOGIN_REQUEST, loginAuth)
    yield takeEvery(FETCH_USERDETAILS_REQUEST, fetchUserInfo)
}