import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import { createLogger } from 'redux-logger'

import counter from './reducers/counter'
import user from './reducers/user'

export function getStore() {
  const reducers = {
    counter,
    user,
  }
  const combineReducer = combineReducers(reducers)

  const logger = createLogger()

  const store = applyMiddleware(thunk, promise, logger)(createStore)(
    combineReducer,
  )
  return store
}
