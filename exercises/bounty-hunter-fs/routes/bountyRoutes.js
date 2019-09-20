const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty')

bountyRouter.route('/')

    .get((req, res, next) => {
        Bounty.find({user: req.user._id}, (err, bounties) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(bounties)
        })
    })

    .post((req, res, next) => {
        const bounty = new Bounty(req.body)
        bounty.user = req.user._id
        bounty.save((err, bounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(bounty)
        })
    })

bountyRouter.route('/:_id')

    .get((req, res, next) => {
        Bounty.findOne({_id : req.params._id, user: req.user._id}, (err, bounty) => {
            if(err){
                res.status(404)
                return next(err)
            }
            return res.status(200).send(bounty)
        })
    })

    .put((req, res, next) => {
        Bounty.findByIdAndUpdate({_id : req.params._id, user: req.user._id}, req.body, {new: true}, (err, bounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(bounty)
        })
    })

    .delete((req, res, next) => {
        Bounty.findByIdAndRemove({_id: req.params._id, user: req.user._id}, (err, bounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send({
                msg: `The following bounty has been deleted, well done!`,
                bounty
            })
        })
    })

module.exports = bountyRouter