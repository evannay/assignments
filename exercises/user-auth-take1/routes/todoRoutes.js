const express = require('express')
const todoRouter = express.Router()
const Todo = require('../models/todo')

todoRouter.route('/')
    
    .get((req, res, next) => {
        Todo.find({user: req.user._id}, (err, todos) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.send(todos)
        })
    })

    .post((req, res, next) => {
        const newTodo = new Todo(req.body)
        newTodo.user = req.user._id
        newTodo.save((err, todo) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(todo)
        })
    })

todoRouter.route('/:_id')

    .get((req, res, next) => {
        Todo.findOne({_id : req.params._id, user: req.user._id}, (err, todo) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            if(!todo){
                res.status(404)
                return next(new Error("No todo item found!"))
            }
            return res.status(200).send(todo)
        })
    })

    .put((req, res, next) => {
        Todo.findOneAndUpdate({_id : req.params._id, user: req.user._id}, req.body,{new:true}, (err, todo) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.send(todo)
        } )
    })

    .delete((req, res, next) => {
        Todo.findOneAndRemove({_id : req.params._id, user: req.user._id}, (err, todo) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send({
                msg: 'deleted the following successfully',
                todo
            })
        })
    })

module.exports = todoRouter