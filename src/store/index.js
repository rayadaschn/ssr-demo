import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import { createLogger } from 'redux-logger'
import clientRequest from '@/client/request'
import serverRequest from '@/server/request'

import counter from './reducers/counter'
import user from './reducers/user'
import auth from './reducers/auth'

const reducers = {
  counter,
  user,
  auth,
}
const combineReducer = combineReducers(reducers)
const logger = createLogger()

export function getClientStore() {
  // const store = applyMiddleware(
  //   thunk.withExtraArgument(clientRequest),
  //   promise,
  //   logger,
  // )(createStore)(combineReducer)

  // 改用服务端的初始值, 将值挂载到 window 全局
  const initialState = window.context.state
  const store = applyMiddleware(
    thunk.withExtraArgument(clientRequest),
    promise,
    logger,
  )(createStore)(combineReducer, initialState)

  return store
}

export function getServerStore() {
  const store = applyMiddleware(
    thunk.withExtraArgument(serverRequest),
    promise,
    logger,
  )(createStore)(combineReducer)
  return store
}
