const User = require('../models/users-model')
const createError = require('http-errors')

module.exports.register = (req, res, next) => {
  User.findOne( { email: req.body.email })
    .then(user => {
      if(user) throw createError(409, 'Email already registered' )
      else return new User(req.body).save()
    })
    .then(user => res.status(201).json(user))
    .catch(next)
}