const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/api/users', (req, res) => {
  console.log('🚀 ~ app.get ~ req:', req)
  res.json([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
  ])
})

app.listen(3007, () => {
  console.log('API listening on port 3007: http://localhost:3007/')
})
