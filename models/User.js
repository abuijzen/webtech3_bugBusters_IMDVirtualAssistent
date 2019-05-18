const mongoose = require('mongoose');

//schema declareren
const Schema = mongoose.Schema;

//plugin die signup en login bevat
const passportLocalMongoose = require('passport-local-mongoose');

//nieuw schema maken
//model user bevat plugin
const User = new Schema({});

//schema bevat geen velden, authenticatie,wachtwoord hash... zit al in de plugin
User.plugin(passportLocalMongoose);

//user model exporteren
module.exports = mongoose.model('User', User);