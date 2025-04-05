import React from 'react'
import Home from './routes/Home'
import Counter from './routes/Counter'
import User from './routes/User'
import UserAdd from './routes/UserAdd'
import UserList from './routes/UserList'

export default [
  {
    path: '/',
    index: true,
    element: <Home />,
  },
  {
    path: '/counter',
    element: <Counter />,
  },
  {
    path: '/user/add',
    element: <UserAdd />,
  },
  {
    path: '/user/list',
    element: <UserList />,
  },
  // {
  //   path: '/user',
  //   element: <User />,
  //   children: [
  //     {
  //       path: '/user/add',
  //       element: <UserAdd />,
  //     },
  //     {
  //       path: '/user/list',
  //       element: <UserList />,
  //     },
  //   ],
  // },
]
