import axios from 'axios'

const request = (req) => {
  const cookie = req.get('cookie') || ''
  return axios.create({
    baseURL: 'http://localhost:3007',
    headers: {
      cookie,
    },
  })
}

export default request
