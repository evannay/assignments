const express = require('express')
const app = express()
const PORT = 5454

app.use('/', express.json())
app.use('/things', require('./thingRoutes'))

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})