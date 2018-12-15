const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 8000

// Middleware fired on every request
app.use(express.json()) // req.body  POST PUT
app.use(morgan('dev'))  // Helpful console logs on server requests


//Routes
app.use('/items', require('./routes/item'))


// Mongoose Connect
mongoose.connect('mongodb://localhost:27017/crud-store', {useNewUrlParser: true}, () => {
    console.log('connect to the db captain!')
})


// Global server error handler
app.use((err, req, res, next) => {
    return res.send({errMsg: err.message})
})


// Server
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT} sir!`)
})