const express = require('express')
const reuter = express.Router()
const mongoose = require('mongoose')
require('../models/formulario')
const Categoria = mongoose.model('categorias')


module.exports = reuter