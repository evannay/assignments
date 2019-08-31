const express = require('express')
const todoRouter = express.Router()
const data = require('./data.json')
const uuid = require('uuid/v4')

todoRouter.route('/')


    .get((req, res) => {
        res.send(data)
    })


    .post((req, res) => {
        let newTodo = req.body
        newTodo._id = uuid()
        data.push(newTodo)
        res.send({
            msg: 'Successfully Added Your Todo!',
            newTodo
        })
})

todoRouter.route('/:_id')


    .get((req, res) => {
        const _id = req.params._id
        const myTodo = data.find((todo) => todo._id === _id)
        res.send(myTodo)
    })


    .put((req, res) => {
        let updatedTodo = req.body
        const _id = req.params._id
        data.forEach(todo => _id === todo._id ? Object.assign(todo, updatedTodo) : todo)
        res.send({
            msg: 'Updated'
        })
    })

    .delete((req, res) => {
        const _id = req.params._id
        let index = data.findIndex(todo => todo._id === _id)
        data.splice(index, 1)
        res.send({
            msg: 'Deleted Item Successfully'
        })
    })

    module.exports = todoRouter