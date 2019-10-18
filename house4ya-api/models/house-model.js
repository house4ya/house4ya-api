const mongoose = require('mongoose')

const houseSchema = new mongoose.Schema({
  address: {
    type: String
  },
  description: { 
    type: String
  },
  squareMetres: {
    type: Number
  },
  photos: {
    type: String
  },
  owner: { type: mongoose.Schema.Types.ObjectId,
  ref: 'User'}

})

const House = mongoose.model('House', houseSchema)

module.exports = House