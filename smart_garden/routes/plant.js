const express = require('express')
const plantRouter = express.Router()
const Plant = require("../models/plant")


// Get all
plantRouter.get('/', (req, res, next) => {
    Plant.find((err, plants) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(plants)
    })
})


// Get one
plantRouter.get('/:id', (req, res, next) => {
    Plant.findOne({_id: req.params.id} , (err, plant) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(plant)
    })
})


// Add One
plantRouter.post('/', (req, res, next) => {
    console.log('post request got hit')
    const newPlant = new Plant(req.body)
    newPlant.save((err, plant) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(plant)
    })
})


// Update One
plantRouter.put('/:id', (req, res, next) => {
    Plant.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true},
        (err, updatedPlant) => {
            if (err) {
                return next(err)
            }
            return res.status(201).send(updatedPlant)
        }
    )
})


// Delete One
plantRouter.delete('/:id', (req, res, next) => {
    console.log('delete route was hit')
    Plant.findOneAndDelete({_id: req.params.id}, (err, deletedPlant) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(202).send(`succesfully deleted!`)
    })
})


module.exports = plantRouter