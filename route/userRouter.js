const express = require('express')
const route = express()

const userController = require('../controllers/userController')








route.get('/',userController.loadDashboard)

route.get('/login',userController.loadLogin)

route.get('/about',userController.loadAbout)




module.exports = route