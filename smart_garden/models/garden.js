const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gardenSchema = new Schema({
    gardenName: {
        type: String,
        required: true,
        lowercase: true
    },
    gardenData: [{
        rows: {
            type: Number,
            default: 0
        },
        cols: Number,
        plots: [{

        }]
    }]

})

module.exports = mongoose.model("Garden", gardenSchema)


// Garden.findOneAndUpdate(
//     {_id: req.params.id}, 
//     req.body
//     // {$set: {rows: req.body.rows, cols: req.body.cols}, $push: {plots: req.body.plot}} )