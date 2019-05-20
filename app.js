const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors =require('cors');
const passport = require('./passport/passport');

//routers inladen
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const apiMessagesRouter = require('./routes/api/v1/messages')

//mongoose eerst: npm i mongoose
const mongoose = require('mongoose');
//gebruik nieuwste versie om indexes te gebruiken op true
mongoose.set('useCreateIndex',true);
//mongoose connecteerd met localhost op poort 27017 op databasenaam: messagesapp
mongoose.connect('mongodb://localhost:27017/messagesapp',{useNewUrlParser:true});

//express opstarten, applicatie starten
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));

//vanaf dat er json gestuurd wordt zal express deze parsen/ontleden
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//Als je zou werken met sessie
//app.use('/users',passport.authenticate('local'),usersRouter);

//alle routes die hieraan voldoen, 
app.use('/api/v1/messages', passport.authenticate('jwt',{ //eerst token checken of je naar deze pagina mag gaan
  session: false }), 
  apiMessagesRouter);//apiMessageRouter aan toevoegen, deze link naar een functie

// als er iets foutloopt wordt deze functie gestart
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
