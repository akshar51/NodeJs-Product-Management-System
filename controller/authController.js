const User = require("../models/auth")
const bcrypt = require('bcrypt')

module.exports.loginPage = (req,res)=>{
    res.render('pages/login')
}

module.exports.registerPage = (req,res)=>{
    res.render('pages/register')
}

module.exports.register = async (req,res)=>{
    try {
        req.body.password = await bcrypt.hash(req.body.password,10)
        await User.create(req.body)
        console.log("User created...")
        res.redirect('/login')
    } catch (error) {
        console.log(error.message)
        console.log("User not found...")
    }
}
