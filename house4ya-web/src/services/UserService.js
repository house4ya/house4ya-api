import http from './BaseService'

const getProfile = () =>  http.get('/profile')
.then(res => Promise.resolve(res.data))


export default {
  getProfile
}