// import axios from 'axios'
import { ADD_USER, SET_USER_LIST } from '../action-types'
const actionCreators = {
  getUserList() {
    return function (dispatch, getState, request) {
      return request
        .get('/api/users')
        .then((res) => {
          const { data } = res
          console.log('🚀 ~ returnaxios.get ~ data:', data)

          dispatch({
            type: SET_USER_LIST,
            payload: data, // 用户列表的数组
          })
        })
        .catch((err) => {
          console.log('🚀 ~ returnaxios.get ~ err:', err)
        })
    }
  },
  addUser(user) {
    console.log('🚀 ~ addUser ~ user:', user)
    return {
      type: ADD_USER,
      payload: user, // 新增的用户对象
    }
  },
}

export default actionCreators
