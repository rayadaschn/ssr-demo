import React from 'react'
import { hydrateRoot } from 'react-dom/client'
// import Counter from '@/routes/Counter'
import { BrowserRouter } from 'react-router-dom'
import App from '@/App'

const root = document.getElementById('root')

// 客户端进行水合
hydrateRoot(
  root,
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
