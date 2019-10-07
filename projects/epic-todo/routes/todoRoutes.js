const express = require('express')
const todoRouter = express.Router()
const Todo = require('../models/todoSchema')


todoRouter.route('/')

    .get((req, res, next) => {
        res.send('got em')
    })

    .post((req, res, next) => {
        res.send('post one')
    })

todoRouter.route('/:_id')

    .get((req, res, next) => {
        res.send('got one')
    })

    .put((req, res, next) => {
        res.send('put one')
    })

    .delete((req, res, next) => {
        res.send('deleted one')
    })

module.exports = todoRouter