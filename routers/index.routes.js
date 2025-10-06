const { Router } = require("express");
const dashboardCtl = require('../controller/dashboardController')
const authCtl = require('../controller/authController')
const router = Router()

router.get('/',dashboardCtl.homePage)
router.get('/login',authCtl.loginPage)
router.get('/register',authCtl.registerPage)


module.exports = router