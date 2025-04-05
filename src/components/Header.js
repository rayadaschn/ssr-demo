import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
      <li>
        <Link to="/user/add">添加用户</Link>
      </li>
      <li>
        <Link to="/user/list">用户列表</Link>
      </li>
    </ul>
  )
}

export default Header
