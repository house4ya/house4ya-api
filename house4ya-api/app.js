require('dotenv').config()

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose')
const passport = require('passport')


require('./configs/db.configs')
const session = require('./configs/session.config')
require('./configs/passport.config')



var app = express();



// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));


app.use(session)
app.use(passport.initialize())
app.use(passport.session())



const authRouter = require('./routes/authRoute');
const usersRouter = require('./routes/users');
const housesRoutes = require('./routes/housesRoutes')

app.use('/', authRouter);
app.use('/users', usersRouter);
app.use('/houses', housesRoutes)




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (error, req, res, next) {
  console.error(error);

  res.status(error.status || 500);

  const data = {}

  if (error instanceof mongoose.Error.ValidationError) {
    res.status(400);
    for (field of Object.keys(error.errors)) {
      error.errors[field] = error.errors[field].message
    }
    data.errors = error.errors
  } else if (error instanceof mongoose.Error.CastError) {
    error = createError(404, 'Resource not found')
  }

  data.message = error.message;
  res.json(data);
});



module.exports = app;
