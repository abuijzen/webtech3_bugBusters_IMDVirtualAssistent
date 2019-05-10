var express = require('express');
var router = express.Router();

//let messagesController = require('../../../controllers/messages');
//router.get('/api/v1/messages', messagesController.get);

let messagesController = require('../../../controllers/api/v1/messages');

//GET /api/v1/messages OF /api/v1/messages?user=username
router.get('/', messagesController.getAll);

//GET /api/v1/messages/:id
router.get('/:id', messagesController.getById);

//POST /api/v1/messages
router.post('/', messagesController.create);

//PUT /api/v1/messages/:id
router.put('/:id', messagesController.update);

//DELETE /api/v1/messages/:id
router.delete('/:id', messagesController.remove);

module.exports = router;