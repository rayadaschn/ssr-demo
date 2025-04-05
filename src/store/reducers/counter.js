import { ADD } from '../action-types'

const initiateState = {
  number: 0,
}

function counter(state = initiateState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        number: state.number + 1,
      }

    default:
      return state
  }
}

export default counter
