const express = require('express')
const app = express()
require('dotenv').config()
const PORT = 8088
const mongoose = require('mongoose')

app.use('/', express.json())
app.use('/auth', require('./routes/authRoutes'))
app.use('/todos', require('./routes/todoRoutes'))

mongoose.connect('mongodb://localhost:27017/epic-todos', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: false, 
    useUnifiedTopology: true
})
.then(() => {
    console.log('mongoose connected')
})


app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})

