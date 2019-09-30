const express = require('express')
const weatherRoute = express.Router()

weatherRoute.route('/')

    .get((req, res, next) => {
        res.send('got em all')
    })

    .post((req, res, next) => {
        res.send('posted one')
    })

weatherRoute.route('/:_id')

    .get((req, res, next) => {
        res.send('got one')
    })

    .put((req, res, next) => {
        res.send('put one')
    })

    .delete((req, res, next) => {
        res.send('deleted one')
    })

module.exports = weatherRoute