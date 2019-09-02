// const express = require('express')
// const app = express()
// const PORT = 1248



// app.use('/', express.json())
// app.use('/bounties', require('./bountyRoutes.js'))



// app.listen(PORT, () => {
//     console.log(`App is listening on port ${PORT}`)
// })

const express = require('express')
const app = express()
const PORT = 1249

app.use('/', express.json())
app.use('/bounties', require('./bountyRoutes.js'))

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})