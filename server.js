const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require("method-override")
const logger = require("morgan");
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const addRestaurantRoutes = require('./routes/addRestaurant')


//Use .env file in config folder
require('dotenv').config({path: './config/.env'})

//Connect To Database
connectDB()

//Using EJS for views
app.set('view engine', 'ejs')

//Static Folder
app.use(express.static('public'))

//Body Parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"))

//Setup Routes For Which The Server Is Listening
app.use('/', mainRoutes)
app.use('/addRestaurant', addRestaurantRoutes)

//Server Running
app.listen(process.env.PORT, ()=>{
  console.log('Server is running, you better catch it!')
})  