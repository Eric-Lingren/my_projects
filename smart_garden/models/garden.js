const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gardenSchema = new Schema({
    gardenName: {
        type: String,
        required: true,
        lowercase: true
    },
    plotHeight: {
        type: Number,
        required: true
    },
    plotWidth: {
        type: Number,
        required: true
    },
    gardenData: {
        type: Array,
        required: true
    },
    gardenPlot: {
        type: Array,
        required: true
    },
    gardenYear: {
        type: String
    }
    //  $in
    //  $push

})

module.exports = mongoose.model("Garden", gardenSchema)


// Garden.findOneAndUpdate(
//     {_id: req.params.id}, 
//     req.body
//     // {$set: {rows: req.body.rows, cols: req.body.cols}, $push: {plots: req.body.plot}} )