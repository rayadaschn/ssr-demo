import React from 'react'
import { hydrateRoot } from 'react-dom/client'
// import Counter from '@/routes/Counter'
// import { BrowserRouter } from 'react-router-dom'
// routerV6 用这个
import { HistoryRouter as Router } from 'redux-first-history/rr6'
import { getClientStore } from '@/store'
import App from '@/App'

const root = document.getElementById('root')
const { store, history } = getClientStore()
// 客户端进行水合
hydrateRoot(
  root,
  <Router history={history}>
    <App store={store} />
  </Router>,
)
