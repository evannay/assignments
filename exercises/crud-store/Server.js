const express = require('express')
const app = express()
const PORT = 8080
const mongoose = require('mongoose')

app.use('/', express.json())
app.use('/store', require('./Routes/StoreRoutes'))

mongoose.connect('mongodb://localhost:27017/crud-store', {useNewUrlParser: true}).then(() => {
    console.log('Mongoose connected')
})
    .catch(err => {
        console.log(err)
    })



app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}.`)
})