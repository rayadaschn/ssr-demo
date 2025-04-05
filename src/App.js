import React from 'react'
import { useRoutes } from 'react-router-dom'
import routesConfig from './routesConfig'
import Header from './components/Header'
import { Provider } from 'react-redux'

// import { getStore } from './store'
// const store = getStore()

// 在 App 中解构 store 属性即可
function App({ store }) {
  // console.log('🚀 ~ App ~ store:', store)
  return (
    <Provider store={store}>
      <Header />
      {useRoutes(routesConfig)}
    </Provider>
  )
}

export default App
