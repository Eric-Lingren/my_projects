const express = require('express')
const plantRouter = express.Router()
const plantSchema = require('../models/plant')

//  Get All
plantRouter.get('/', (req, res, next) => {
    plantSchema.find((err, plants) => {
        if (err){
            console.log("Got error")
            res.status(500)
            return next(err)
        }
        return res.status(200).send(plants)
    })
})

//  Post 
plantRouter.post('/', (req, res, next) => {
    const newPlant = new plantSchema(req.body)
    newPlant.save((err, plant) => {
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(plant)
    })
})



module.exports = plantRouter
