const express = require('express')
const cors = require('cors')
const session = require('express-session')

const app = express()
app.use(cors()) // 允许跨域
app.use(express.json()) // 解析json格式的请求体
app.use(express.urlencoded({ extended: true })) // 解析urlencoded格式的请求体

app.use(
  session({
    secret: 'huy', // 用于生成session的签名
    resave: false, // 是否每次都重新保存session，默认为true
    saveUninitialized: true, // 是否保存未初始化的session，默认为true
    cookie: { secure: false }, // 是否使用安全cookie，默认为false
  }),
)

app.get('/api/users', (req, res) => {
  console.log('🚀 ~ app.get ~ req:', req)
  res.json([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
  ])
})

// 登录
app.post('/api/login', (req, res) => {
  const user = req.body
  console.log('🚀 ~ app.post ~ user:', user)
  req.session.user = user
  res.json({ success: true, data: user })
})

// 登出
app.post('/api/logout', (req, res) => {
  console.log('🚀 ~ app.post ~ req:', req)
  req.session.user = null
  res.json({ success: true })
})

// 有效性校验
app.post('/api/validate', (req, res) => {
  const user = req.session?.user
  console.log('🚀 ~ app.post ~ req.session:', user)

  if (user) {
    res.json({ success: true, data: user })
  } else {
    res.json({ success: false, error: '用户未登录' })
  }
})

app.listen(3007, () => {
  console.log('API listening on port 3007: http://localhost:3007/')
})
