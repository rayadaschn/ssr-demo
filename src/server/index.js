import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '@/App'
import { StaticRouter } from 'react-router-dom/server'
import routesConfig from '../routesConfig'

const express = require('express')
const path = require('path')
const proxy = require('express-http-proxy')

const app = express()
// app.use('/api', proxy('http://localhost:3007'), {
//   proxyReqPathResolver: (req) => {
//     return '/api' + req.url
//   },
// })

// 处理静态资源
app.use(express.static(path.resolve(__dirname, '../public')))

// 这里路由匹配有点问题, 暂时这么写
routesConfig.forEach(({ path }) => {
  app.get(path, (req, res) => {
    const html = renderToString(
      <StaticRouter location={req.url}>
        <App />
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
        <script src="/client.js"></script>
      </body>
    </html>
  `)
  })
})

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})
