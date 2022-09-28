const mongoose = require("mongoose")

const RestaurantSchema = new mongoose.Schema({
  area: {
    type: String,
    required: true,
  },
  food: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  // firstTime: {
  //   type: Boolean,
  //   required: true,
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("Restaurant", RestaurantSchema, "restaurant-info")