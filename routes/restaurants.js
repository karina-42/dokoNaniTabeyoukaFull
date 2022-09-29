const express = require('express')
const router = express.Router()
const restaurantController = require('../controllers/restaurants')

//you already said the path is /addRestaurant in server.js so you don't need to put it here
router.get('/', restaurantController.getRestaurants)
//same thing, don't need to make it /addRestaurant/createRestaurant
router.post('/createRestaurant', restaurantController.createRestaurant)

router.get('/deleteRestaurant/:id', restaurantController.deleteRestaurant)



module.exports = router