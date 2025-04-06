import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
  const user = useSelector((state) => state.auth.user)
  return (
    <div>
      <h3>当前登录用户</h3>
      <p>name: {user && user.name}</p>
    </div>
  )
}
export default Profile
