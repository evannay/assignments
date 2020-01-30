const express = require('express')
const todoRouter = express.Router()
const Todo = require('../Models/todoSchema')

todoRouter.route('/')

.get((req, res, next) => {
    Todo.find({user: req.user._id},(err, todo) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(todo)
    })
})

.post((req, res, next) => {
    const newTodo = new Todo(req.body)
    newTodo.user = req.user._id
    newTodo.xpValue = Math.floor(Math.random() * 26)
    newTodo.save((err, todo) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(todo)
    })
})

todoRouter.route('/:_id')

.get((req, res, next) => {
    Todo.findOne({_id: req.params._id, user: req.user._id}, (err, todo) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(todo)
    })
})

.put((req, res, next) => {
    Todo.findOneAndUpdate({_id: req.params._id, user: req.user._id}, req.body, {new:true},  (err, todo) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(todo)
    })
})

.delete((req, res, next) => {
    Todo.findOneAndRemove({_id: req.params._id, user: req.user._id}, (err, todo) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send({msg: 'the following todo has been deleted', todo})
    })
})

module.exports = todoRouter