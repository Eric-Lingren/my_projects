const mongoose = require('mongoose');
const Schema = mongoose.Schema

const plantSchema = new Schema({

    plantType: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    name: {
        type: String
    }
})

module.exports = mongoose.model("Plant", plantSchema)