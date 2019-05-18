//passport module opvragen
const passport=  require('passport');
const User= require('../models/User');

//query inloggen en registreren
passport.use(User.createStrategy());

//serialize user data for sessions
// gebruiker word naar een string geserialiseerd en wordt omgekeerd uitgelezen uit een sessie
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());