const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex)
router.get('/randomFood', homeController.getRandomFood)
router.post('/pickFood', homeController.pickFood)

module.exports = router
