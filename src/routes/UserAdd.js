import { ADD_USER } from '@/store/action-types'
import actionCreators from '@/store/actionCreators/user'
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function UserAdd() {
  const nameRef = useRef()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = nameRef.current.value
    console.log(name)
    // 添加用户
    dispatch(
      actionCreators.addUser({
        id: Date.now(),
        name,
      }),
    )
    // 跳转到用户列表页
    navigate('/user/list')
  }

  return (
    <>
      <form>
        用户名：
        <input ref={nameRef} />
        <button onClick={handleSubmit}>添加</button>
      </form>
    </>
  )
}

export default UserAdd
