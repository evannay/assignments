const express = require('express')
const todoRouter = express.Router()
const Todo = require('../models/TodoSchema')

todoRouter.route('/')

    .get((req, res, next) => {
        Todo.find((err, todo) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(todo)
        })
    })

    .post((req, res, next) => {
        const todo = new Todo(req.body)
        // todo.user = req.user._id
        todo.xpValue = Math.floor(Math.random() * 25)
        todo.save((err, todo) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(todo)
        })
    })

todoRouter.route('/:_id')

    .get((req, res, next) => {
        Todo.findById({_id: req.params._id}, (err, todo) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(todo)
        })
    })

    .put((req, res, next) => {
        Todo.findOneAndUpdate({_id: req.params._id}, req.body, {new:true}, (err, todo) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(todo)
        })
    })

    .delete((req, res, next) => {
        Todo.findOneAndRemove({_id: req.params._id}, (err, todo) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send({
                msg: `the following todo has been deleted successfully`,
                todo
            })
        })
    })

module.exports = todoRouter