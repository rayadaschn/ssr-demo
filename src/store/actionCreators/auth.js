import { push } from 'redux-first-history'
import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../action-types'

const actionCreators = {
  login(user) {
    return function (dispatch, getState, request) {
      return request.post('/api/login', user).then((res) => {
        const { data, success, error } = res.data
        if (success) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: data, // 用户列表的数组
          })
          dispatch(push('/profile'))
        } else {
          dispatch({
            type: LOGIN_ERROR,
            payload: error, // 失败原因
          })
        }
      })
    }
  },
  logout() {
    return function (dispatch, getState, request) {
      return request.post('/api/logout').then((res) => {
        const { data, success, error } = res.data
        console.log('🚀 ~ returnrequest.post ~ res.data:', res.data)

        if (success) {
          dispatch({
            type: LOGOUT_SUCCESS,
            payload: data, // 用户列表的数组
          })
          dispatch(push('/login'))
        }
      })
    }
  },
  validate() {
    return function (dispatch, getState, request) {
      return request.post('/api/validate').then((res) => {
        const { data, success } = res.data
        if (success) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: data, // 用户列表的数组
          })
        }
      })
    }
  },
}

export default actionCreators
