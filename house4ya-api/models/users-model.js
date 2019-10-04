const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const SALT_FACTOR = 10
const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
const PASSWORD_PATTERN = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: "required username"
  },
  email: {
    type: String,
    required: "required email",
    lowercase: true,
    trim: true,
    unique: true,
    match: [EMAIL_PATTERN, 'Invalid email pattern']
  },
  password: {
    type: String,
    required: true,
    match: [PASSWORD_PATTERN, 'Invalid password pattern']
  },
  avatar: {
    type: String,
    required: false
  }
    
  
}, {
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      ret.id = doc._id
      delete ret._id
      delete ret.__v
      delete ret.password    //check this out
      return ret
    }
  }
})

usersSchema.pre('save', function(next) {
  const user = this

  if(!user.isModified('password')) {
    next()
  }else {
    bcrypt.genSalt(SALT_FACTOR)
    .then(salt => {
      return bcrypt.hash(user.password, salt)
      .then(hash => {
        user.password = hash
        next()
      })
      .catch(next)
    })
  }
})

usersSchema.methods.checkPassword = function(password) {
  return bcrypt.compare(password, this.password)
}

const User = mongoose.model('User', usersSchema)
module.exports = User