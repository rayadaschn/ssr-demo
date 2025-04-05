import React from 'react'
import Home from './routes/Home'
import Counter from './routes/Counter'

export default [
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/',
    element: <Counter />,
  },
]
