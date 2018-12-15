const express = require('express')
const plantRouter = express.Router()
const Plant = require('../models/plant')

//  Get All
plantRouter.get('/', (req, res, next) => {
    console.log('test')
    Plant.find((err, plants) => {
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(plants)
    })
})

//  Get One


//  Post 
plantRouter.post('/', (req, res, next) => {
    const newPlant = new Plant(req.body)
    newPlant.save((err, plant) => {
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(plant)
    })
})


//  Put


//  Delete


module.exports = plantRouter
