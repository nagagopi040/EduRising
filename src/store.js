import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'
import rootReducers from './reducers'

const sagaMiddleware = createSagaMiddleware()
const initialState = {}

const store = createStore(
	rootReducers,
	initialState,
	applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

export default store