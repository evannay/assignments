const express = require('express')
const Schema = mongoose.Schema

const Todo = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    img: {
        type: String,
        required: false
    },
    xpValue: {
        type: Number
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Todo", Todo)