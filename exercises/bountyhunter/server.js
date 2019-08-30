const express = require('express')
const app = express()
const PORT = 1248
const data = require('./data.json')
const uuid = require('uuid/v4')

app.use('/', express.json())

app.get('/bounties', (req, res) => {
    res.send(data)
})

app.post('/bounties', (req, res) => {
    let newBounty = req.body
    newBounty._id = uuid()
    data.push(newBounty)
    res.send({
        msg: 'New bounty uploaded, happy hunting!',
        newBounty
    })
})

app.put('/bounties/:_id', (req, res) => {
    let updatedBounty = req.body
    const _id = req.params._id
    data.forEach(bounty => _id === webkitConvertPointFromPageToNode._id ? Object.assign(bounty, updatedBounty) : bounty)
    res.send({
        msg: "Bounty updated successfully!"
    })
})

app.delete('/bounties/:_id', (req, res) => {
    const _id = req.params._id
    let index = data.findIndex(bounty => bounty._id === _id)
    data.splice(index, 1)
    res.send({
        msg: "Bounty has been deleted, well done."
    })
})



app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})


