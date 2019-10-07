const express = require('express')
const app = express()
const PORT = 8083
const mongoose = require('mongoose')

app.use('/', express.json())
app.use('/todos', require('./routes/todoRoutes'))

mongoose.connect('mongodb://localhost:27017/epic-todo', {
    useNewUrlParser:true,
    useCreateIndex:false,
    useFindAndModify:true,
    useUnifiedTopology: true
}).then(() => {
    console.log('mongoose connected')
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})

