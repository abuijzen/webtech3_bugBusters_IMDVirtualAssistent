const mongoose = require('mongoose');

//zorgt ervoor dat je het objectschema kan gebruiken
const Schema = mongoose.Schema;

//nieuw schema aanmaken/definiëren
const messageSchema = new Schema({
    //definitie = JSON object
    //schema opbouwen:bepalen wat de types zijn, required is, minimum lengte,datatype...
    //klasse structuur waaruit je documenten kan genereren
    text : {
        type:String,
        required:true   
    },
    user: String,
    completed: Boolean
})

//klasse, model maken op mongoose, 
//'Message' = collection naam
// op basis van het messageSchema
const Message = mongoose.model('Message',messageSchema)


module.exports = Message;