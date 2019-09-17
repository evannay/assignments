const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Todo", todoSchema)