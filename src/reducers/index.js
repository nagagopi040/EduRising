import { combineReducers } from 'redux'
import login from './loginReducers'
import profile from './profileReducers'

export default combineReducers({
    login,
    profile
})