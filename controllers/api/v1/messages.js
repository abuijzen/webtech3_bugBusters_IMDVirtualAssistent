const Message = require('../../../models/messages')

//GET /api/v1/messages OR //GET /api/v1/messages?user=user
// Haalt alle messages uit je databank
// messageController //GET /api/v1/messages?user=user //req.query.user
let getAll = (req, res) => {
  Message.find({
    //"user": "Eleni"
  }, (err, docs) => { //  Message = mongoose.model
    if (!err) {
      let user = req.query.user;
      if (req.query.user) { //GET /api/v1/messages?user=user
        let user = req.query.user;
        res.json({
          "status": "success", // "status" : "succes|fail|error"
          "messages": `GETTING message for user ${user}`,
          "user": user,
          "data": {
            "messages": docs
          }
        });
      } else if (!req.query.user) { //GET /api/v1/messages
        res.json({
          "status": "success",
          "messages": "GETTING messages",
          "data": {
            "messages": docs
          }
        });
      }
    } else {
      res.send(err);
    }
  });
}

module.exports.getAll = getAll;

//GET /api/v1/messages/:id > getById
// Haalt één message uit je databank
let getById = (req, res) => {
  Message.findById(req.params._id, (err, docs) => { //  Message = mongoose.model
    const id = parseInt(req.params.id, 10);
    if (err) {
      res.send(err);
    }
    res.json({
      "status": "success",
      "data": {
        "messages": []
      },
      "messages": `GETTING messages with ID ${id}`,
    });
    //console.log(id); // WERKT 🔥
  });
}
module.exports.getById = getById;

//POST /api/v1/messages > create
// Voegt messages toe aan je databank + 
// Als iemand een nieuw chatbericht plaatst moet dat  LIVE  getoond worden bij elke gebruiker in de chat

let create = (req, res, next) => {
  let m = new Message();
  let user = req.body.user;
  let text = req.body.text;
  m.user = user;
  m.text = text;

  docsOffline = `POSTING a new message for user ${user}`; //Pikachu`; 

  m.save((err, doc) => {
    if (!err) {
      res.json({
        "status": "success",
        "data": {
          "messages": doc
        },
        "messages": docsOffline,
      });
    } else if (err) {
      res.json({
        "status": "error",
        "messages": "Could not save your messages",
      });
    }
  });

}

module.exports.create = create;

//PUT /api/v1/messages/:id > update 
// Update een message + Enkel je eigen berichten mag je kunnen updaten
// Als iemand een bericht update moet dat LIVE  getoond worden bij elke gebruiker in de chat

let update = (req, res) => {
  Message.findOneAndUpdate({
    id: req.params._id
  }, req.body, {
    new: true
  }, (err, message) => {
    const id = parseInt(req.params.id, 10);
    //let id = req.params.id;
    if (err) {
      res.send(err);
    } else {
      res.json({
        "status": "success",
        "message": `UPDATING a message with id ${id}`
      });
    }
  });
}
module.exports.update = update;

//DELETE /api/v1/messages/:id > remove
// Verwijdert een message + Enkel je eigen berichten mag je kunnen verwijderen
// Als iemand een bericht verwijdert moet dat  LIVE   getoond worden bij elke gebruiker in de chat

// let del, OR remove ipv delete // want delete werkt niet 
let remove = (req, res) => {
  Message.remove({
    _id: req.params._id
  }, (err, message) => {
    //const id = parseInt(req.params.id, 10);
    let id = req.params.id;
    if (err) {
      res.send(err);
    }
    res.json({
      "status": "success",
      "message": `DELETING a message with id ${id}`
    });
  });
}

module.exports.remove = remove;