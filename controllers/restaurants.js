const Restaurant = require('../models/Restaurant.js')

module.exports = {
  getRestaurants: async (req, res) => {
    try {
      const restaurants = await Restaurant.find({})
      res.render('restaurants.ejs', {restaurants: restaurants})
      
    } catch (error) {
      console.log(error);
    }
  },
  createRestaurant: async (req, res) => {
    try {
      await Restaurant.create({
        area: req.body.area,
        food: req.body.food,
        name: req.body.name,
      })
      res.redirect('/restaurants')
    } catch (error) {
      console.log(error);
    }
  },
  deleteRestaurant: async (req, res) => {
    try {
      await Restaurant.findByIdAndRemove({_id: req.params.id})
      res.redirect('/restaurants')
    } catch (error) {
      console.log(error);
    }
  }
  // test button
//   testRestaurant: async (req, res) => {
//     try {
    
//       res.send('ok')
//       console.log(res.body);
//     } catch (error) {
//       console.log(error);
//     }
// }
}

