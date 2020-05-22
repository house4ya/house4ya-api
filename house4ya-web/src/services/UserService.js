import http from './BaseService'

const getProfile = () =>  http.get('/profile')
.then(res => Promise.resolve(res.data))

const addFavs = (id) => http.post(`/users/add_favourites/${id}`)
.then(res => Promise.resolve(res.data))

const listFavs = () => http.get('users/favourites')
.then( res => Promise.resolve(res.data))

export default {
  getProfile,
  addFavs,
  listFavs
}