const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gardenSchema = new Schema({
    gardenName: {
        type: String,
        required: true,
        lowercase: true
    },
    plot: {
        type: Array,
        required: true
    }

})

module.exports = mongoose.model("Garden", gardenSchema)