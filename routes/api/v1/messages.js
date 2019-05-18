const express = require('express');

//geef het router object van express
//vraag Router functie op
const router = express.Router();

//verwijst naar de file met functies die moet worden aangeroepen
const messageController = require('../../../controllers/api/v1/messages')

//prefix api/v1/messages
//get wordt afgehandeld met getAll functie
//deze functie staat in de file die aan const messagecontroller hangt
router.get("/",messageController.getAll);

//get wordt afgehandeld met getAll create functie
//deze functie staat in de file die aan const messagecontroller hangt
router.post("/",messageController.create);




module.exports = router;