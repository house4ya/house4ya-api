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

},{ timestamps: true,
toJSON: {
  transform: (doc, ret) => {
    ret.id = doc._id;
    delete ret._id;
    delete ret.__v;
    return ret 
  }
}})

const House = mongoose.model('House', houseSchema)

module.exports = House