
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const formulario = new Schema({

nome: {
    type: String,
    required: true
},
email: {
    type: String,
    required: true
},
sobre: {
    type: Date,
    required: true
},
observacao: {
    type: String,
    required: true
}

})

mongoose.model('contact', formulario)