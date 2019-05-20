//passport module opvragen
const passport=  require('passport');
const User= require('../models/User');

//query inloggen en registreren
passport.use(User.createStrategy());

//serialize user data for sessions
// gebruiker word naar een string geserialiseerd en wordt omgekeerd uitgelezen uit een sessie
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//webtoken strategie
var JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;

var opts = {}

//token wordt gedecrypted
opts.jwtFromRequest= ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey='secret';

//payload= token die je binnenkrijgt
passport.use(new JwtStrategy(opts, function(jwt_payload,done){
    //user zoeken op basis van id
    User.findOne({_id: jwt_payload.uid}, function(err,user){
        //bij error, krijg je error terug
        if (err){
            return done(err,false);
        }
        //user gevonden? dan krijg je de user terug
        if(user){
            return done(null,user);
        }
        //niets gevonden dan gebeurd er niks
        else{
            return done(null,false);
        }
    });
}));

module.exports = passport;