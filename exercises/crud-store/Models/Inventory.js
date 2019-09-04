const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema ({
    name : {
        required: true,
        type: String
    },
    type : {
        required: true,
        type: String
    },
    price : {
        type: Number,
        required: true
    },
    inventory : {
        type: Number, 
        required: true
    }    
})


module.exports = mongoose.model('Inventory', inventorySchema)
