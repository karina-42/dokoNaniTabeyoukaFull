const Restaurant = require('../models/Restaurant.js')

module.exports = {
  getRestaurants: async (req, res) => {
    try {
      const restaurants = await Restaurant.find({})
      res.render('restaurants.ejs', {title: 'レストラン', restaurants: restaurants})
      
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
  editRestaurant: async (req, res) => {
    try {
      const restaurant = await Restaurant.findById({_id: req.params.id})
      console.log(restaurant.name);
      res.render('edit', {title: 'エディット',restaurant: restaurant})
    } catch (error) {
      console.log(error);
    }
  },
  saveRestaurant: async (req, res) => {
    try {
      let saveData = {
        $set: {
          name: req.body.restaurantName,
          area: req.body.restaurantArea,
          food: req.body.restaurantFood
        }
      }
      await Restaurant.updateOne({_id: req.body.restaurantId}, saveData)
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

