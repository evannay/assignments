// const express = require('express')
// const bountyRouter = express.Router()
// const data = require('./data.json')
// const uuid = require('uuid/v4')

// bountyRouter.route('/')

//     .get((req, res) => {
//         res.send(data)
//     })

//     .post((req, res) => {
//         let newBounty = req.body
//         newBounty._id = uuid()
//         data.push(newBounty)
//         res.send({
//             msg: 'New bounty uploaded, happy hunting!',
//             newBounty
//         })
// })

// bountyRouter.route('/:_id')


//     .put((req, res) => {
//         let updatedBounty = req.body
//         const _id = req.params._id
//         data.forEach(bounty => _id === webkitConvertPointFromPageToNode._id ? Object.assign(bounty, updatedBounty) : bounty)
//         res.send({
//             msg: "Bounty updated successfully!"
//         })
//     })

//     .delete((req, res) => {
//         const _id = req.params._id
//         let index = data.findIndex(bounty => bounty._id === _id)
//         data.splice(index, 1)
//         res.send({
//             msg: "Bounty has been deleted, well done."
//         })
//     })


// module.exports = bountyRouter


// const express = require('express')
// const data = require('./data.json')
// const uuid = require('uuid/v4')
// const bountyRouter = express.Router()

// bountyRouter.route('/')

//     .get((req, res) => {
//         res.send(data)
//     })

//     .post((req, res) => {
//         let newBounty = req.body
//         newBounty._id = uuid()
//         data.push(newBounty)
//         res.send({
//             msg: 'New bounty uploaded!'
//         })
//     })

// bountyRouter.route ('/:_id')

//     .delete((req, res) => {
//         const _id = req.params._id
//         let index = data.findIndex(bounty => bounty._id === _id)
//         data.splice(index, 1)
//         res.send({
//             msg: 'Bounty deleted, well done.'
//         })
//     })


const express = require('express')
const data = require('./data.json')
const uuid = require('uuid/v4')
const bountyRouter = express.Router()

bountyRouter.route('/')

    .get((req, res) => {
        res.send(data)
    })

    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuid()
        data.push(newBounty)
        res.send({
            msg: 'New Bounty added successfully',
            newBounty
        })
    })

bountyRouter.route('/:_id')

    .get((req, res) => {
        const _id = req.params._id
        const myBounty = data.find(bounty => bounty._id === _id)
        res.send(myBounty)
    })

    .put((req, res) => {
        const updatedBounty = req.body
        const _id = req.params._id
        data.forEach(bounty => {
            _id === bounty._id ? Object.assign(bounty, updatedBounty) : bounty
        })
        res.send({
            msg: `Bounty updated successfully. . .`
        })
    })

    .delete((req, res) => {
        const _id = req.params._id
        let index = data.findIndex(bounty => bounty._id === _id)
        data.splice(index, 1)
        res.send({
            msg: `Bounty, deleted, well done.`
        })
    })



module.exports = bountyRouter