const mongoose = require('mongoose')
const Schema = mongoose.Schema

const plantSchema = new Schema({
    plantType: {
        type: String,
        required: true,
        lowercase: true
    },
    varitey: {
        type: String,
        required: false,
        lowercase: true
    },
    imageUrl:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model("Plant", plantSchema)