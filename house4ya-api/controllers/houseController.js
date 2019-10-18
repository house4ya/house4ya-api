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
  console.log(req.user._id)
  house.save()
  .then(house => res.status(201).json(house))
  .catch(next)
}