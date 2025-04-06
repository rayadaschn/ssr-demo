// 登录组件
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import actionCreators from '@/store/actionCreators/auth'

function Login() {
  const nameRef = useRef('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = nameRef.current.value
    const user = { name }
    // 派发
    dispatch(actionCreators.login(user))
  }
  return (
    <form onSubmit={handleSubmit}>
      用户名
      <input ref={nameRef} />
      <input type="submit" />
    </form>
  )
}

export default Login
