const logger =(req,res,next)=>{
    console.log("het is gelukt");
    next() //volgende functie mag afgehandeld worden
}

module.exports = logger;