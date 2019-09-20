const express = require('express')
const app = express()
require('dotenv').config()
const PORT = 8080
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')

app.use('/', express.json())
app.use('/auth', require('./routes/auth'))
app.use('/api', expressJwt({secret: process.env.SECRET}))
app.use('/api/appointments', require('./routes/appointments'))

app.use((err, req, res, next) => {
    console.error(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({message: err.message})
})

mongoose.connect('mongodb://localhost:27017/vet-clinic', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
})
.then(() => {
    console.log(`mongoose is connected`)
})
.catch(err => console.log(err))

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})