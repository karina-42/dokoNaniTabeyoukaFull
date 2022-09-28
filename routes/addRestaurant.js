const express = require('express')
const router = express.Router()
const addRestaurantController = require('../controllers/addRestaurant')

router.get('/addRestaurant', addRestaurantController.addRestaurant)
// router.post("/new", addRestaurantController.addRestaurant);

module.exports = router;
