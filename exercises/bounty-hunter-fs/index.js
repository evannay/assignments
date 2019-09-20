const express = require('express')
const app = express()
require('dotenv').config()
const expressJwt = require("express-jwt")
const PORT = process.env.PORT 
const mongoose = require('mongoose')



app.use('/', express.json())
app.use('/auth', require('./routes/auth'))
app.use('/api', expressJwt({secret: process.env.SECRET}))
app.use('/api/bounty', require('./routes/bountyRoutes'))

app.use((err, req, res, next) => {
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({message: err.message })
})

mongoose.connect('mongodb://localhost:27017/bounty-hunter', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: false
})
.then(() => {
    console.log(`mongoose connected`)
})
.catch(err => console.log(err))

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})


