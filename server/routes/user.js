const express = require('express')
const { signup } = require('../controllers/userController')
const router = express.Router()

// Define your routes here
router.post('/signup', signup);

module.exports = router