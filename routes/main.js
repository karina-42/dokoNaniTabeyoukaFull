const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const addRestaurantController = require('../controllers/addRestaurant')

//button test endpoint
// router.get('/createRestaurant', addRestaurantController.testRestaurant)

// React test endpoint
// router.get("/createRestaurant", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

router.get('/', homeController.getIndex)
router.get('/addRestaurant', addRestaurantController.getAddRestaurant)
//for some reason only works here
router.post('/createRestaurant', addRestaurantController.createRestaurant)

module.exports = router
