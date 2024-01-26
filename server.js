// * DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

// * CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// * ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// * CONTROLLERS
// Requires the bands controller file and saves it to a variable named bandsController
const bandsController = require('./controllers/bands_controller')
// Makes it so that the bands controller is used when going to any URL starting with '/bands'.
app.use('/bands', bandsController)

// * LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})