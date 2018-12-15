const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 8000


//  Middleware
app.use(express.json())
app.use(morgan('dev'))

// Routes
// app.use('/plants', require('./routes/plant'))

//  Mongoose Connect
mongoose.connect('mongose.db://localhost/27017/plants', {useNewUrlParser: true}, () => {
    console.log('[O] -- We have connection to the database, friend!')
})

// Global server error handler
app.use((err, req, res, next) => {
    return res.send({errMsg: err.message})
})

// Listen
app.listen(PORT, () => {
    console.log('[+] -- Server is listening, buddy!')
})

