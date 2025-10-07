const { Router } = require("express");
const dashboardCtl = require('../controller/dashboardController')
const authCtl = require('../controller/authController')
const pdtCtl = require('../controller/productController')
const router = Router()

router.get('/',dashboardCtl.homePage)

// Auth
router.get('/login',authCtl.loginPage)
router.get('/register',authCtl.registerPage)

// Product
router.get('/addProduct',pdtCtl.addProductPage)
router.get('/table',pdtCtl.tablePage)

router.post('/addProduct',pdtCtl.addProduct)


module.exports = router