const express = require('express')
const router = express.Router()
const restaurantController = require('../controllers/restaurants')

//you already said the path is /restaurants in server.js so you don't need to put it here
router.get('/', restaurantController.getRestaurants)
router.get('/:id', restaurantController.editRestaurant)
router.get('/deleteRestaurant/:id', restaurantController.deleteRestaurant)
//same thing, don't need to make it /restaurants/createRestaurant
router.post('/createRestaurant', restaurantController.createRestaurant)
router.post('/save', restaurantController.saveRestaurant)



module.exports = router