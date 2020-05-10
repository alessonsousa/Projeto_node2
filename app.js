const express = require('express');
const mongoose = require('mongoose')
const app = express();


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
});

//Mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Gamer')
console.log('Conectado com mongo!')





app.listen(8080, function () {
  console.log('Servidor rodando na port 8080!');
});