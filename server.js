const express = require('express')
const app = express()
const bt21 = require('./db')



app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/bt21', (req, res) => {
    res.json(bt21)
  })

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})
