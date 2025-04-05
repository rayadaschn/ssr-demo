import { ADD_USER, SET_USER_LIST } from '../action-types'

const initiateState = {
  list: [],
}
function user(state = initiateState, action) {
  // console.log('🚀 ~ user ~ state:', state)
  switch (action.type) {
    case SET_USER_LIST:
      return {
        list: action.payload,
      }
    case ADD_USER:
      return {
        list: [...state.list, action.payload],
      }
    default:
      return state
  }
}

export default user
