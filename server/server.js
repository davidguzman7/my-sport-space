const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

// Connection
mongoose.connect('mongodb://localhost:27017/sport-space', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB')
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error)
})

// Middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/user', require('./routes/user'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});