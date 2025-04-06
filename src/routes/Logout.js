import actionCreators from '@/store/actionCreators/auth'
import React from 'react'
import { useDispatch } from 'react-redux'
function Logout() {
  const dispatch = useDispatch()
  return (
    <div>
      <button
        onClick={() => {
          dispatch(actionCreators.logout())
        }}
      >
        退出
      </button>
    </div>
  )
}

export default Logout
