const express = require('express'); // importa o express
const app = express(); // cria o app
const path = require('path');
const routes = require('./routes'); // importa as rotas

app.use(express.urlencoded({ extended: true })); // lê dados do formulario (req.body)
app.use(express.static(path.resolve(__dirname, 'public'))); // serve CSS/JS/image

app.set('views', path.resolve(__dirname, 'src', 'views')); // onde estão as views
app.set('view engine', 'ejs'); // template engine

app.use(routes); // usa as rotas

app.listen(3000, () => console.log('Rodando em: http://localhost:3000'));
