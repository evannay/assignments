const express = require('express')
const todoRouter = express.Router()
const Todo = require('../Models/todoSchema')

todoRouter.route('/')

.get((req, res, next) => {
    Todo.find((err, todo) => {
        if(err){
            return res.status(500).send(err)
        }
        return res.status(200).send(todo)
    })
})

.post((req, res, next) => {
    res.send('posted one')
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