// const express = require('express')
// const thingRouter = express.Router()
// const data = require('./data.json')


// thingRouter.route('/')

//     .get((req, res) => {
//         console.log('working')
//         if(req.query.type && req.query.price){
//             const type = data.filter(item => item.type.toLowerCase() === req.query.type.toLowerCase())
//             const price = type.filter(item => item.price <= parseInt(req.query.price))
//             res.send(price)
//         } else if(req.query.type){
//             const type = data.filter(item => item.type.toLowerCase() === req.query.type.toLowerCase())
//             res.send(type)
//         } else {
//             res.send(data)
//         }
//     })


// module.exports = thingRouter

// const express = require('express')
// const data = require('./data.json')
// const thingRouter = express.Router()

// thingRouter.route('/')
    
//     .get((req, res) => {
//         if(req.query.type && req.query.price) {
//             const type = data.filter(item => item.type.toLowerCase() === req.query.type.toLowerCase())
//             const price = type.filter(item => item.price <= parseInt(req.query.price))
//             res.send(price)
//         } else if (req.query.type) {
//             const type = data.filter(item => item.type.toLowerCase() === req.query.type.toLowerCase())
//             res.send(type)
//         } else {
//             res.send(data)
//     }
// })

// module.exports = thingRouter

const express = require('express')
const data = require('./data.json')
const thingRouter = express.Router()


thingRouter.route('/')

    .get((req, res) => {
        if(req.query.type && req.query.price){
            const type = data.filter(item => item.type.toLowerCase() === req.query.type.toLowerCase())
            const price = type.filter(item => item.price <= req.query.price)
            res.send(price)
        } else if(req.query.type){
            const type = data.filter(item => item.type === req.query.type)
            res.send(type)
        } else {
            res.send(data)
        }
    })

module.exports = thingRouter
