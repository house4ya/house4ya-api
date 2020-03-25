import http from './BaseService'

const register = (user) => http.post('/register', user)
.then(res => Promise.resolve(res.data))

export default {
  register
}