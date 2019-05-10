// begin basis mongoose setup
let mongoose = require('mongoose');
let Schema = mongoose.Schema; // schema is stuctuur die adhv model wordt opgebouwd 
let messagesSchema = new Schema({
  //status: String,
  user: String,
  text: String,
  /* text: {
        type: String,
        required: true
    },
    */
  completed: Boolean
});
let Message = mongoose.model('Message', messagesSchema); // soort classe  // Message = mongoose.model
// eind basis setup

module.exports = Message;