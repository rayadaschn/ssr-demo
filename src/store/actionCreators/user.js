import axios from 'axios'
import { ADD_USER, SET_USER_LIST } from '../action-types'
const actionCreators = {
  getUserList() {
    return function (dispatch, getState) {
      return axios.get('http://localhost:3007/api/users').then((res) => {
        const { data } = res
        dispatch({
          type: SET_USER_LIST,
          payload: data, // 用户列表的数组
        })
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
