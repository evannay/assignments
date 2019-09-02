// const express = require('express')
// const app = express()
// const PORT = 5454

// app.use('/', express.json())
// app.use('/things', require('./thingRoutes'))

// app.listen(PORT, () => {
//     console.log(`App is listening on port ${PORT}`)
// })

// const express = require('express')
// const app = express()
// const PORT = 3344

// app.use('/', express.json())
// app.use('/things', require('./thingRoutes'))

// app.listen(PORT, () => {
//     console.log(`App is listening on port ${PORT}`)
// })

const express = require('express')
const app = express()
const PORT = 1250

app.use('/', express.json())
app.use('/things', require('./thingRoutes.js'))

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})