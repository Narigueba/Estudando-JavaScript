const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController')
const tarefaController = require('./controllers/tarefaController')

// Rotas da home
route.get('/', homeController.paginaInicial);

// Rotas de tarefas
route.get('/tarefas', tarefaController.index);
route.post('/tarefas', tarefaController.criar);
route.get('/tarefas/:id', tarefaController.mostrar);
route.get('/tarefas/:id/editar', tarefaController.editar);

module.exports = route;