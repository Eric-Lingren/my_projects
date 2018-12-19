const express = require('express')
const gardenRouter = express.Router()
const Garden = require("../models/garden")
const Year = require('../models/year')


// Get all Gardens
gardenRouter.get('/', (req, res, next) => {
    Garden.find((err, garden) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(garden)
    })
})

//  Get one garden with a specific year
// gardenRouter.get('/year', (req, res, next) => {
//     console.log(req.query)
//     Garden.findOne({gardenName: req.query.name, gardenYear: req.query.year} , (err, garden) => {
//         if (err) {
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(garden)
//     })
// })

// Get one Garden
gardenRouter.get('/:id', (req, res, next) => {
    Garden.findOne({_id: req.params.id} , (err, garden) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(garden)
    })
})


// Add One Garden
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