const express = require('express')
const app = express()
const PORT = 4545
const uuid = require('uuid/v4')
const data = require('./data.json')

app.use('/', express.json())

app.get('/todos', (req, res) => {
    res.send(data)
})

app.get('/todos/:_id', (req, res) => {
    const _id = req.params._id
    const myTodo = data.find((todo) => todo._id === _id)
    res.send(myTodo)
})

app.post('/todos', (req, res) => {
    let newTodo = req.body
    newTodo._id = uuid()
    data.push(newTodo)
    res.send({
        msg: 'Successfully Added Your Todo!',
        newTodo
    })
})

app.put('/todos/:_id', (req, res) => {
    let updatedTodo = req.body
    const _id = req.params._id
    data.forEach(todo => _id === todo._id ? Object.assign(todo, updatedTodo) : todo)
    res.send({
        msg: 'Updated'
    })
})

app.delete('/todos/:_id', (req, res) => {
    const _id = req.params._id
    let index = data.findIndex(todo => todo._id === _id)
    data.splice(index, 1)
    res.send({
        msg: 'Deleted Item Successfully'
    })
})



app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})