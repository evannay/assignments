const express = require('express')
const app = express()
const PORT = 8081

app.use('/', express.json())
app.use('/weather', require('./routes/weatherRoute'))

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})