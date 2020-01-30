const express = require('express')
const app = express()
require("dotenv").config()
const PORT = 9090
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')

app.use('/', express.json())
app.use('/auth', require('./Routes/auth'))
app.use('/api', expressJwt({secret: process.env.SECRET}))
app.use('/api/todos', require('./Routes/todoRoute'))

app.use((err, req, res, next) => {
    console.error(err)
    if(err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({message: err.message})
})

mongoose.connect("mongodb://localhost:27017/xptodo", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}).then(() => {
    console.log('mongoose connected')
})


app.listen(PORT, ()=> {
    console.log(`App is listening on port ${PORT}`)
})