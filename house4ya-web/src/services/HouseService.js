import http from './BaseService'

const getHouses = () => http.get('/houses/list')
.then(res => Promise.resolve(res.data))

export default {
  getHouses
}
