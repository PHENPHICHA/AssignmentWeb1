const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const firebase = require('firebase')

const config = {
    apiKey: "AIzaSyBmKla_IYy3zeZaH3Wnirpv2MsjNQ28KM4",
    authDomain: "assignmentweb1-72964.firebaseapp.com",
    databaseURL: "https://assignmentweb1-72964.firebaseio.com",
    projectId: "assignmentweb1-72964",
    storageBucket: "assignmentweb1-72964.appspot.com",
    messagingSenderId: "865356969454"
  };
firebase.initializeApp(config);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/bt21', (req, res) => {
    var bt21Ref = firebase.database().ref('bt21');
    bt21Ref.on('value', function(snapshot) {
        res.send(snapshot.val());
    });  
  })

app.get('/bt21/:id', (req, res) => {
    var id = req.params.id
    firebase.database().ref('/bt21/' + id).once('value').then(function(snapshot) {
      res.send(snapshot.val());
    });
  })
  
app.post('/bt21', (req, res) => {
    var id = req.body.id
    var name = req.body.name
    var by = req.body.by
    var price = req.body.price
    var newPostKey = firebase.database().ref('/bt21/' + id).set({
        id: id,
        name: name,
        by: by,
        price: price

    });
    res.send("Posted!");
 })

app.put('/bt21/:id', (req, res) => {
    var id = req.body.id
    var name = req.body.name
    var by = req.body.by
    var price = req.body.price
    var put = { 
        id: id,
        name: name,
        by: by,
        price: price

    };
    firebase.database().ref('/bt21/' + id).update(put);
    res.send("Updated!")
  })

app.delete('/bt21/:id', (req, res) => {
    var id = req.params.id
    firebase.database().ref('/bt21/' + id).remove();
    res.send("Deleted!")
 })

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})
