import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import actionCreators from '@/store/actionCreators/user'

function UserList() {
  const dispatch = useDispatch()
  const list = useSelector((state) => state.user.list)

  useEffect(() => {
    if (!list.length) {
      dispatch(actionCreators.getUserList())
    }
  }, [list.length, dispatch])

  return (
    <ul>
      {list.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default UserList
