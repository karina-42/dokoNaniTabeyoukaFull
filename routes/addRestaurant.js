const express = require('express')
const router = express.Router()
const addRestaurantController = require('../controllers/addRestaurant')

//you already said the path is /addRestaurant in server.js so you don't need to put it here
router.get('/', addRestaurantController.getAddRestaurant)
//same thing, don't need to make it /addRestaurant/createRestaurant
router.post('/createRestaurant', addRestaurantController.createRestaurant)




module.exports = router