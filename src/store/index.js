import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import { createLogger } from 'redux-logger'
import clientRequest from '@/client/request'
import serverRequest from '@/server/request'
import { createBrowserHistory, createMemoryHistory } from 'history'
import { createReduxHistoryContext } from 'redux-first-history'

// import { createReduxHistory, routerMiddleware, routerReducer } from '@/history'

import counter from './reducers/counter'
import user from './reducers/user'
import auth from './reducers/auth'

// const reducers = {
//   counter,
//   user,
//   auth,
//   router: routerReducer,
// }
// const combineReducer = combineReducers(reducers)
// const logger = createLogger()

export function getClientStore() {
  // const store = applyMiddleware(
  //   thunk.withExtraArgument(clientRequest),
  //   promise,
  //   logger,
  // )(createStore)(combineReducer)

  // 改用服务端的初始值, 将值挂载到 window 全局
  const initialState = window.context.state

  // history
  const { createReduxHistory, routerMiddleware, routerReducer } =
    createReduxHistoryContext({
      history: createBrowserHistory(),
    })

  const reducers = {
    counter,
    user,
    auth,
    router: routerReducer,
  }
  const combineReducer = combineReducers(reducers)
  const logger = createLogger()

  const store = applyMiddleware(
    thunk.withExtraArgument(clientRequest),
    promise,
    routerMiddleware,
    logger,
  )(createStore)(combineReducer, initialState)

  const history = createReduxHistory(store)
  return { store, history }
}

export function getServerStore(req) {
  const { createReduxHistory, routerMiddleware, routerReducer } =
    createReduxHistoryContext({
      history: createMemoryHistory(),
    })

  const reducers = {
    counter,
    user,
    auth,
    router: routerReducer,
  }
  const combineReducer = combineReducers(reducers)
  const logger = createLogger()

  const store = applyMiddleware(
    thunk.withExtraArgument(serverRequest(req)),
    promise,
    routerMiddleware,
    logger,
  )(createStore)(combineReducer)

  const history = createReduxHistory(store)
  return { store, history }
}
