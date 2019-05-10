const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const config = require('config'); // for db connection

//configs 
const dbConfig = config.get('Customer.dbConfig');
//db.connect(dbConfig, ...);

// connection maken met db in config 
//let dbConfig = config.get('../Customer.dbConfig'); // link naar config file

//mongoose.connect(dbConfig, {useNewUrlParser: true});

// routers opladen 
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let messagesRouter = require('./routes/api/v1/messages');



mongoose.connect('mongodb://localhost:27017/messages', {
  useNewUrlParser: true
});
// let connection = 'mongodb://localhost:27017/messageLab5';


//////////
// test mongoose connection
//mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log("we're connected!");
});
//////////
const app = express();
//////////

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// aan bepaalde routes, een router functie toekennen
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/v1/messages', messagesRouter); // ??????


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.messages = err.messages;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;