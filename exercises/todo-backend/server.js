const express = require('express')
const app = express()
const PORT = 4545


app.use('/', express.json())
app.use('/todos', require('./todoRoutes.js'))




app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})