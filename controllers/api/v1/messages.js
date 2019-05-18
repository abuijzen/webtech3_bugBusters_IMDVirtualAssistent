const Message = require('../../../models/message');


const getAll = (req,res)=>{
    Message.find({"user":"Angelique"}, (err,docs)=>{
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


const create = (req,res,next)=>{
    console.log(req.body);
    let message = new Message();
    message.text=req.body.text;
    message.user = req.body.user;
    message.completed = req.body.completed;

    message.save((err,doc)=>{
        if(err){
            res.json({
                "status":"error",
                "Message":"Could not save this item"
            })
        }
        if(!err){
            res.json({
                "status": "succes",
                "data":{
                    "message":doc
                }
            });
        }
    })


    
}

module.exports.getAll=getAll;
module.exports.create=create;