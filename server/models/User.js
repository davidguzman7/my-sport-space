const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true, unique: true, match: [/.+\@.+\..+/, 'Please fill a valid email address'] },
  password: { type: String, required: true, minlength: 3 },
  id_profile: { type: String, required: true, minlength: 3 }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)