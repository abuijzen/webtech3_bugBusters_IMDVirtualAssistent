const User = require('../models/User');

//post naar route signup
const signup = async (req,res,next)=>{

    console.log(req.body);

    //gegeven uitlezen om user object te maken
    let username = req.body.username;
    let password = req.body.password;

const user = new User({
    username:username
});
    //wachtwoord instellen voor de user   
    await user.setPassword(password);
    //user opslaan
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
    const user = await User.authenticate()(req.body.username,req.body.password).then(result => {
        res.json({
            "status": "succes",
            "data":{
                "user":result
            }
        });
    }).catch(error => {
        res.json({
            "status":"error",
            "message":error
        })
    });

};

module.exports.signup = signup;
module.exports.login= login;