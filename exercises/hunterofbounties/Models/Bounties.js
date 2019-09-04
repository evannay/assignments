const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        required: true,
        type: String
    },
    living : {
        type: Boolean,
        default: true
    },
    bountyAmount : {
        type: Number,
        required: true
    },
    type: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Bounties', bountySchema)