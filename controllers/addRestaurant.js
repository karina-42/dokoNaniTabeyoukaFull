const Restaurant = require('../models/Restaurant.js')

module.exports = {
  addRestaurant: async (req, res) => {
    try {
      const restaurants = await Restaurant.find({})
      console.log(restaurants);
      res.render('addRestaurant.ejs', {restaurants: restaurants})
      
    } catch (error) {
      console.log(error);
    }
  },
  // addRestaurant: async (req, res) => {
  //   try {
  //     await Restaurant.create({
  //       area: req.body.area,
  //       food: req.body.food,
  //       name: req.body.name,
  //     })
  //     res.redirect('/')
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}

