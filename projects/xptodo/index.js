const express = require('express')
const app = express()
const PORT = 9090

app.use('/', express.json())
app.use('/todos', require('./Routes/todoRoute'))

app.listen(PORT, ()=> {
    console.log(`App is listening on port ${PORT}`)
})