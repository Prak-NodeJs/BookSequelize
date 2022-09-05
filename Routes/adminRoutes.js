const adminController = require('./../Controller/adminController')
// const reviewControlle = require('./../Controllers/reviewsController')

const router = require('express').Router()

//use router
router.post('/admin/Register', adminController.Register)
router.post('/admin/login', adminController.login)

router.get('/admin/displayallBooks', adminController.getAllBooks)
router.get('/admin/displayallUsers', adminController.getAllUsers)

router.get('/admin/getUserDetail', adminController.getUserDetails)
router.get('/admin/BookUsers', adminController.getBookUsers)
module.exports = router
