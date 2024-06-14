const User = require('../models/User')

exports.signup = async (req, res) => {
  const { name, email, password } = req.body

  try {
    const newUser = new User({ name, email, password })
    await newUser.save()
    res.status(201).json(newUser)
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' })
  }
}