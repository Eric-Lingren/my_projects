const mongoose = require('mongoose')
const Schema = mongoose.Schema

const yearSchema = new Schema({
    year: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Year", yearSchema)