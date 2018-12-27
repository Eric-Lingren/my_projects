const express = require('express')
const imageRouter = express.Router()
const Image = require("../models/image")


// Get all Images
imageRouter.get('/', (req, res, next) => {
    Image.find((err, image) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(image)
    })
})

// Add One Image
imageRouter.post('/', (req, res, next) => {
    console.log('Image post request got hit')
    const newImage = new Image(req.body)
    newImage.save((err, image) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(image)
    })
})

// Delete One
imageRouter.delete('/:id', (req, res, next) => {
    console.log('delete route was hit')
    Image.findOneAndDelete({_id: req.params.id}, (err, deletedImage) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(202).send(`succesfully deleted!`)
    })
})

module.exports = imageRouter