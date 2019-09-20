const express = require('express')
const appointmentRouter = express.Router()
const Appointment = require('../models/appointment')

appointmentRouter.route('/')

    .get((req, res, next) => {
        Appointment.find({user: req.user._id}, (err, appointment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(appointment)
        })
    })

    .post((req, res, next) => {
        const appointment = new Appointment(req.body)
        appointment.user = req.user._id
        appointment.save((err, appointment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(appointment)
        })
    })

appointmentRouter.route('/:_id')

    .get((req, res, next) => {
        Appointment.findOne({_id: req.params._id, user: req.user._id}, (err, appointment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(appointment)
        })
    })

    .put((req, res, next) => {
        Appointment.findByIdAndUpdate({_id: req.params._id, user: req.user._id}, req.body, {new:true}, (err, appointment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(appointment)
        })
    })

    .delete((req, res, next) => {
        Appointment.findByIdAndRemove({_id: req.params._id, user: req.user._id}, (err, appointment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send({
                msg: `The following appoinment has been deleted`,
                appointment
            })
        })
    })

module.exports = appointmentRouter