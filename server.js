const express = require('express')
const app = express()
const bt21 = require('./db')



app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/bt21', (req, res) => {
    res.json(bt21)
  })

app.get('/bt21/:id', (req, res) => {
    res.json(bt21.find(bt21 => bt21.id === req.params.id))
  })
  

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})
