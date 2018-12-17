const express = require('express')
const gardenRouter = express.Router()
const Garden = require("../models/garden")


// Get all
gardenRouter.get('/', (req, res, next) => {
    Garden.find((err, garden) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(garden)
    })
})


// Get one
gardenRouter.get('/:id', (req, res, next) => {
    Garden.findOne({_id: req.params.id} , (err, garden) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(garden)
    })
})


// Add One
gardenRouter.post('/', (req, res, next) => {
    console.log('post request got hit')
    const newGarden = new Garden(req.body)
    newGarden.save((err, garden) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(garden)
    })
})


// Update One
// gardenRouter.put('/:id', (req, res, next) => {
//     Plant.findOneAndUpdate(
//         {_id: req.params.id},
//         req.body,
//         {new: true},
//         (err, updatedPlant) => {
//             if (err) {
//                 return next(err)
//             }
//             return res.status(201).send(updatedPlant)
//         }
//     )
// })


// Delete One
gardenRouter.delete('/:id', (req, res, next) => {
    console.log('delete route was hit')
    Garden.findOneAndDelete({_id: req.params.id}, (err, deletedGarden) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(202).send(`succesfully deleted!`)
    })
})


module.exports = gardenRouter