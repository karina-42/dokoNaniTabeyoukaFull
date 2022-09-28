const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const addRestaurantController = require('../controllers/addRestaurant')


router.get('/', homeController.getIndex)
router.get('/addRestaurant', addRestaurantController.getAddRestaurant)

module.exports = router
