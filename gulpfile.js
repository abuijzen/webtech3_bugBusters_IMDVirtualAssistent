
const {
    src,
    dest,
    parallel
}= require('gulp');

const browserSync = require('browser-sync').create();


function doBrowserSync(){
  
    browserSync.init({
        server:{
            baseDir:"./views/signup" 
        },
      });   
 
}
module.exports.default = parallel(doBrowserSync);


