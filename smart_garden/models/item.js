const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    department: {
        type: String,
        enum: ["Home Goods", "Health", "Clothing", "Electronics", "Food"],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    entryDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Item", itemSchema)