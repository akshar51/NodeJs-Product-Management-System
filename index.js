const bodyParser = require('body-parser');
const express = require('express');
const db = require('./configs/db');
const LocalStrategy = require('./middleware/passport')
const session = require('express-session')
const passport = require('passport')
const port = 3000;
const app = express()

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))

app.use(session({
    secret:'user',
    resave:false,
    saveUninitialized:false,
    cookie : {maxAge: 1000*60*60}
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/',require('./routers/index.routes'))

app.listen(port,(err)=>{
    if(!err){
        db()
        console.log("Server started..")
        console.log("http://localhost:"+port)
    }
})
