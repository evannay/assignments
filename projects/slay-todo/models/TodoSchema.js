const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    imgUrl: {
        type: String
    },
    completed: {
        type: Boolean,
        default: false
    },
    xpValue: {
        type: Number
    }
})

module.exports = mongoose.model('Todo', todoSchema)