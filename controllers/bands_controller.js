// * Dependencies
// Router with a variable named bands
const bands = require('express').Router()
// requires the models folder and saves it to a variable named db
// Requiring the folder is best, because we're requiring the index file, and thus all of our models at once!
const db = require('../models')
const { Band } = db

// * Export 
module.exports = bands