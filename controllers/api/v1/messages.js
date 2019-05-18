const Message = require('../../../models/message');


const getAll = (req,res)=>{
    //Kiezen in messages wat je wilt zien/zoeken
    //je krijgt error terug of docs die aan de zoekterm voldoen
    Message.find({"user":"lala"}, (err,docs)=>{
        if (!err){
            res.json({
                "status": "succes",
                "data":{
                    "message":docs
                }
            });
        }
    });
   
}

//next, middleware
const create = (req,res,next)=>{
    //body van de request geven, in JSON
    console.log(req.body);
    //nieuwe instantie van Message item maken
    let message = new Message();

    //message bevat text,user
    //req.body.iets -> stuurd body mee die je zelf invult, variabel
    message.text=req.body.text;
    message.user = req.body.user;
    message.completed = req.body.completed;

    //message opslaan
    //resultaat: error of het document dat afgehandeld wordt 
    message.save((err,doc)=>{
        if(err){
            //error laten afhandelen door express, krijgt html error terug
            //return next(error);
            
            res.json({
                "status":"error",
                "Message":"Message is niet opgeslagen"
            })
        }
        if(!err){
            res.json({
                "status": "succes",
                "data":{
                    //het bewaarde document wordt gebruikt als message
                    "message":doc
                }
            });
        }
    })


    
}

module.exports.getAll=getAll;
module.exports.create=create;