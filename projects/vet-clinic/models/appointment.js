const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    date: {
        required: true,
        type: String
    },
    time: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Appointment', appointmentSchema)