const bookController = require('./../Controller/BookController')
// const reviewControlle = require('./../Controllers/reviewsController')
const auth = require('./../Controller/authController')

const router = require('express').Router()

//use router
router.post('/addBooks', auth, bookController.addBooks)

module.exports = router
