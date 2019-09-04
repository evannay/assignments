const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../Models/Bounties')

bountyRouter.route('/')

    .get((req, res) => {
        Bounty.find((err, bounty) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(bounty)
        })
    })

    .post((req, res) => {
        const newBounty = new Bounty(req.body)
        newBounty.save((err, bounty) => {
            if(err) return res.status(500).send(err)
            return res.status(201).send(bounty)
        })
    })

bountyRouter.route('/:_id')

    .get((req, res) => {
        const _id = req.params._id
        Bounty.findById(_id, (err, bounty) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(bounty)
        })
    })

    .put((req, res) => {
        const _id = req.params._id
        Bounty.findByIdAndUpdate(_id, req.body, {new:true}, (err, bounty) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(bounty)
        })
    })

    .delete((req, res) => {
        const _id = req.params._id
        Bounty.findByIdAndDelete(_id, (err, bounty) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send({
                msg: 'Bounty Deleted, well done. . . ',
                bounty
            })
        })
    })

    module.exports = bountyRouter