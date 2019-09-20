const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    name: {
        type: String,
        required: true,
        tolowercase: true,
    },
    isAlive: {
        type: Boolean,
        default: true
    },
    bountyAmount: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Bounty', bountySchema)