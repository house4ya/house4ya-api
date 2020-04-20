import http from './BaseService'

const getHouses = () => http.get('/houses/list')
.then(res => Promise.resolve(res.data))

const createHouses = (house) => http.post('/houses/create_house', house)
.then(res => Promise.resolve(res.data))

const getProperties = () => http.get('/houses/properties')
.then( res => Promise.resolve(res.data))

const getHouseDetail = (id) => http.get(`/houses/detail_house/${id}`)
.then( res => Promise.resolve(res.data))

const deleteHouse = (owner, house) => http.delete(`/houses/delete_house/${owner}/${house}`)
.then( res =>(Promise.resolve(res.data)))

const editHouse = (owner, houseId, property) => {
  const data = new FormData();
  Object.keys(property).forEach(prop => {
    return data.append(prop, property[prop])
  })
 return http.put(`/houses/edit_house/${owner}/${houseId}`, data)
.then( res => Promise.resolve(res.data))
}


export default {
  getHouses, createHouses, getProperties, getHouseDetail, deleteHouse, editHouse
}
