import axios from 'axios'
import { store } from '../stores/'

const api = axios.create({
  baseURL: 'https://myrom-300d4.firebaseio.com/',
  timeout: 30000
})

api.interceptors.response.use(null, function (error) {
  debugger;
  if (!error.response) {
    console.log('axios - network error')
    alert(error.response)
  }

  return Promise.reject(error)
})

export default api
