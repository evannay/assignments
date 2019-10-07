const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema ({
    title: {
        required: true,
        type: String
    },
    description: {
        required: false,
        type: String
    },
    completed: {
        default: false,
        type: String
    },
    xpValue: {
        type: Number
    }
})

module.exports = mongoose.model('Todo', todoSchema)