const House = require('../models/house-model')
const createError = require('http-errors')
const User = require('../models/users-model')

module.exports.list = (req, res, next) => {
  House.find()
  .then(houses => res.status(200).json(houses))
  .catch(next)
}

module.exports.createHouse = (req, res, next) => {
  const house = new House({
    address: req.body.address,
    description: req.body.description,
    squareMetres: req.body.squareMetres,
    owner: req.user._id

  })
  house.save()
  .then(result => {
    
    User.findByIdAndUpdate(req.user._id, { $push:{houses: result.house} } )
    .then( response => res.json(response))
  })
  .catch(next)
}

module.exports.listHouses = (req, res, next) => {
  const user = req.user._id
  // House.find( {owner: user})
  // .then(houses => res.json(houses))
  // .catch(next)
  User.findById(req.user._id).populate('houses')
  .then(response => res.json(response))
  .catch(next)
  
}    