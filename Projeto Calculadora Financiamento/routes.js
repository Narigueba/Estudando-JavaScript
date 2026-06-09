const express = require('express');
const route = express.Router();
const calculadoraController = require('./src/controllers/calculadoraController');

route.get('/', calculadoraController.index);
route.post('/calcular', calculadoraController.calcular);

module.exports = route;