const express = require('express')
const app = express()
const PORT = 8787
const mongoose = require('mongoose')

app.use('/', express.json())
app.use('/bounties', require('../BountyRoutes/BountyRoutes'))

mongoose.connect('mongodb://localhost:27017/bounty-hunter', {useNewUrlParser:true}).then(() => {
    console.log('mongoose connected')
})
    .catch(err => {
        console.log(err)
    })

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})