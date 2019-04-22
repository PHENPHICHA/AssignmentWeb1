const express = require('express')
const app = express()
const bt21 = require('./db')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/bt21', (req, res) => {
    res.json(bt21)
  })

app.get('/bt21/:id', (req, res) => {
    res.json(bt21.find(bt21 => bt21.id === req.params.id))
  })
  
app.post('/bt21', (req, res) => {
    bt21.push(req.body)
    res.status(201).json(req.body)
  })

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})
