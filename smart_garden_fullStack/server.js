const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 8000


//  Middleware
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use('/plants', require('./routes/plant'))


app.use((err, req, res, next) => {
    return res.send({errMsg: err.message})
})

//  Mongoose Connect
mongoose.connect('mongodb://localhost:27017/plant-list', {useNewUrlParser: true}, () => {
    console.log('[O] -- We have connection to the database, friend!')
})

// Global server error handler

// Listen
app.listen(PORT, () => {
    console.log(`[+] -- Server is listening on port ${PORT}, buddy!`)
})
