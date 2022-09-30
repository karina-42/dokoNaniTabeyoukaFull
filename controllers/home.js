// const { Decimal128 foodKeys } = require("mongodb")
const Restaurant = require("../models/Restaurant")

module.exports = {
  getIndex: async (req, res)=>{
    try {
      //get Restaurant data
      const data = await Restaurant.find({})
      res.render('index.ejs', {data: data})
    } catch (error) {
      console.log(error);
    }
  },
  pickFood: async (req, res) => {
    try {
      let choice = await Restaurant.find({food: req.body.choice})
      res.render('suggestedRestaurants.ejs', {title: req.body.choice, choice: choice})
    } catch (error) {
      console.log(error);
    }
  }
}