const { Decimal128 } = require("mongodb")
const Restaurant = require("../models/Restaurant")

module.exports = {
    getIndex: async (req, res)=>{
    try {
      //get Restaurant data
      const data = await Restaurant.find({})
      //Make an array of the food keys
      let foodKeys = []
      for(let document of data) {
        foodKeys.push(document.food)
      }
      //Filter the food keys so they don't repeat in the dropdown list
      let uniqueFood = foodKeys.filter((value, index, arr) => {
         return arr.indexOf(value) === index
      })
      //render the homepage and send the unique food keys array under the variable dropdownValues
      res.render('index.ejs', {dropdownValues: uniqueFood})
    } catch (error) {
      console.log(error);
    }
  }
}