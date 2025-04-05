import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function User() {
  return (
    <div>
      <ul>
        <li>
          <link to="/user/add">添加用户</link>
        </li>
        <li>
          <link to="/user/list">用户列表</link>
        </li>
      </ul>
    </div>
  )
}

export default User
