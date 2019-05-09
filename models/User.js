const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//plugin die signup en login bevat
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);