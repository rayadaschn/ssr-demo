import axios from 'axios'

const request = axios.create({
  baseURL: '/',
  // baseURL: 'http://localhost:3007/',
})

export default request
