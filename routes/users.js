var express = require('express');
var router = express.Router();
const authController = require('../controllers/auth')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup',authController.signup);
//als er naar deze link word gesurft word deze functie uitgevoerd
//username en wachtwoord->bcrypt uit request halen
//dit moet via controller gebeuren
router.post('/login',authController.login);

module.exports = router;
