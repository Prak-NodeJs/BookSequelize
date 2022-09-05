const userController = require('./../Controller/usercontroller')
const UserOrderController = require('./../Controller/UserOrderController')

const router = require('express').Router()

//use router
router.post('/user/Register', userController.Register)
router.post('/user/login', userController.login)
// router.post('/user/:name', userController.logout)
router.post('/user/:name', userController.logout)
router.post('/user/buyBook', UserOrderController.buyBooks)

module.exports = router
