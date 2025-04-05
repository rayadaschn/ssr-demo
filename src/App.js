import React from 'react'
import { useRoutes } from 'react-router-dom'
import routesConfig from './routesConfig'

function App() {
  return useRoutes(routesConfig)
}

export default App
