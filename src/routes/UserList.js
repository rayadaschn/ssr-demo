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

// 当有路由组件在服务端获取数据的方法
UserList.loadData = (store) => {
  // 等待异步操作完成, 就可以用仓库的数据进行渲染
  return store.dispatch(actionCreators.getUserList())
}

export default UserList
