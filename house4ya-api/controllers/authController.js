const User = require('../models/users-model')
const createError = require('http-errors')
const passport = require('passport')

module.exports.register = (req, res, next) => {
  User.findOne( { email: req.body.email })
    .then(user => {
      if(user) throw createError(409, 'Email already registered' )
      else return new User(req.body).save()
    })
    .then(user => res.status(201).json(user))
    .catch(next)
}

module.exports.login = (req, res, next) => {
  passport.authenticate('auth-local', (error, user, message) => {
    if(error) {
      next(error)
    }else if(!user) {
      next(createError(401, message))
    }else {
      req.login(user, (error) => {
        if (error) {
          next(error)
        }else {
          res.status(201).json(user)
        }
      })
    }
  })(req, res, next)
}