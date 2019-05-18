const User = require('../models/User')
//login en signup query zit al in model User
//post naar route signup

//assyncrone functie, als deze klaar is worden de functies met await uitgevoerd
const signup = async (req,res,next)=>{

    console.log(req.body);

    //gegeven uitlezen om user object te maken
    let username = req.body.username;
    let password = req.body.password;

    //nieuw user object aanmaken
    //op basis van schema + query van plugin
    const user = new User({
    username:username
});
    //wachtwoord instellen voor de user + encryptie
    await user.setPassword(password);
    //user opslaan via mongoose
    await user.save().then(result =>{
        res.json({
        "status":"succes"
        })
    }).catch(error =>{
        res.json({
        "status": "error"
    })
});
};


const login = async(req,res,next) =>{
    //wachten op user model
    //authenticate = query die kijkt of user en hash van wachtwoord overeenkomen met wat staat in de DB
    //input komt uit req.body veldje username en password
    const user = await User.authenticate()(req.body.username,req.body.password).then(result => {
        res.json({
            "status": "succes",
            "data":{
                //result terugkrijgen uit functie
                "user":result
            }
        });

        //niet gelukt?
    }).catch(error => {
        res.json({
            "status":"error",
            "message":error
        })
    });

};

module.exports.signup = signup;
module.exports.login= login;