import axios from 'axios'
import { store } from '../stores/'

const api = axios.create({
  baseURL: 'https://myrom-300d4.firebaseio.com/',
  timeout: 30000
})

api.interceptors.request.use(config => {
  //config.headers.common['Authorization'] = 'JWT ' + store.state.user.profile.accessToken
  //return config
})

api.interceptors.response.use(null, function (error) {
  // if (!error.response) {
  //   console.log('axios - network error')
  // } else {
  //   console.log(error)
  //   if (error.response.status === 401 || error.response.status === 403) {
  //     store.dispatch('signOutUser')
  //   }
  // }

  // return Promise.reject(error)
})

export default api
