import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '@/App'
import { StaticRouter } from 'react-router-dom/server'
import routesConfig from '../routesConfig'
import { matchRoutes } from 'react-router-dom'

const express = require('express')
const path = require('path')
const proxy = require('express-http-proxy')

const app = express()

app.use(
  '/api',
  proxy('http://localhost:3007', {
    proxyReqPathResolver: (req) => {
      console.log('🚀 代理路径:', req.url)
      console.log('🚀 请求路径:', req.originalUrl)
      return req.originalUrl // 或者 return req.url.replace(/^\/api/, '')
    },
    onError: (err, req, res) => {
      console.error('Proxy Error:', err)
      res.status(500).send('Proxy Error')
    },
  }),
)

// 处理静态资源
app.use(express.static(path.resolve(__dirname, '../public')))

// 处理 store
import { getServerStore } from '../store'

app.get('*', (req, res) => {
  const { store } = getServerStore(req)
  console.log('🚀 ~ app.get ~ store:', store)

  const routeMatches = matchRoutes(routesConfig, { pathname: req.url })
  if (routeMatches) {
    // console.log('🚀 ~ app.get ~ routeMatches:', routeMatches)
    const loadDataPromises = routeMatches
      .map((match) => {
        const loadData = match.route.element.type?.loadData

        if (typeof loadData !== 'function') return Promise.resolve()
        // console.log('🚀 ~ loadDataPromises ~ loadData:', loadData)

        return loadData(store).then(
          (data) => data,
          (error) => error,
        )
      })
      .concat(App.loadData && App.loadData(store))
      .filter(Boolean) // 过滤掉 undefined 的 Promise

    Promise.all(loadDataPromises).then(
      (data) => {
        const store222 = store.getState()
        console.log('🚀 ~ app.get ~ store222 ______--:', store222)
        const html = renderToString(
          <StaticRouter location={req.url}>
            <App store={store} />
          </StaticRouter>,
        )
        res.send(`
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>SSR</title>
            </head>
            <body>
              <div id="root">${html}</div>
              <script>
                // 客户端全局挂载服务端的 store
                var context = {
                  store: ${JSON.stringify(store.getState())}
                }
              </script>
              <script src="/client.js"></script>
            </body>
          </html>
        `)
      },
      (error) => {
        console.log('失败,', error)
      },
    )
  }
})

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})
