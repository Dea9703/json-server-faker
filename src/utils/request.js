import axios from 'axios'

const instance = axios.create({
  baseURL: 'http//:localhost/3000/',
  timeout: 5 * 60000
})

// 请求拦截
instance.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

instance.interceptors.response.use(response => {
  return response
}, err => {
  return Promise.reject(err)
})

export default instance