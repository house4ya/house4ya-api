import http from './BaseService'

const getHouses = () => http.get('/houses/list')
.then(res => Promise.resolve(res.data))

const createHouses = (house) => http.post('/houses/create_house', house)
.then(res => Promise.resolve(res.data))

export default {
  getHouses, createHouses
}
