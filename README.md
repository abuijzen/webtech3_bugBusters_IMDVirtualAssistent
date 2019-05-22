# Bug Busters
IMD Virtual Assistent - project of webtech 3 <br>
Eleni Bosschaerts, Angelique Buijzen & Cesar Peeters
<br>
<br>

## START UP
Om dit te doen werken -> clone <br>
-> $ npm i <br>
-> $ npm start <br>
<br><br>
-> aparte subterminal: $ mongod (Er moet [initandlisten] staan in terminal)
-> $ mongo

## SASS 

sass public/stylesheets/source/style.sass public/stylesheets/build/style.css
sass public/stylesheets/source/login.sass public/stylesheets/build/login.css
sass public/stylesheets/source/signup.sass public/stylesheets/build/signup.css
sass public/stylesheets/source/todos.sass public/stylesheets/build/todos.css

> SASS wordt automatisch naar CSS omgezet van source > build. // + KOPPEL de files  + WATCH 

sass --watch public/stylesheets/source/style.sass public/stylesheets/build/style.css
sass --watch public/stylesheets/source/login.sass public/stylesheets/build/login.css
sass --watch public/stylesheets/source/signup.sass public/stylesheets/build/signup.css
sass --watch public/stylesheets/source/todos.sass public/stylesheets/build/todos.css

## BEM 

.menu {}                    // BLOCK 
.menu__item {}              // __ELEMENT 
.menu__item--featured {}    // --Modifier
.menu--footer {}    

