const { Router } = require("express");
const dashboardCtl = require('../controller/dashboardController')
const authCtl = require('../controller/authController')
const pdtCtl = require('../controller/productController');
const passport = require("passport");
const router = Router()

router.get('/',passport.userAuth,dashboardCtl.homePage)

// Auth
router.get('/login',authCtl.loginPage)
router.get('/register',authCtl.registerPage)


router.post('/register',authCtl.register)
router.post('/login',passport.authenticate('local',{successRedirect : '/',failureRedirect :'/login'}))

// Product
router.get('/addProduct',pdtCtl.addProductPage)
router.get('/table',pdtCtl.tablePage)
router.get('/delete/:id',pdtCtl.delete)

router.post('/addProduct',pdtCtl.addProduct)


module.exports = router