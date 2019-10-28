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

module.exports.editHouse = (req, res, next) => {   //maybe it'bb be bether send it in the body instead of  params
  if ((req.user._id) == (req.params.owner)) { 
  House.findById(req.params.house)
    .then(house => {
      
        Object.keys(req.body).forEach(prop => house[prop] = req.body[prop])
        if (req.file) house.photos = req.file.secure_url
        house.save()
        .then(house => res.status(201).json(house))
    
  })
    .catch(next)
  } else { res.json("you have not permission")}
}