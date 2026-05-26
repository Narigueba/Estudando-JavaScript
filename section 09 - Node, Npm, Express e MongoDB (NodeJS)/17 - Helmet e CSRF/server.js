require('dotenv').config(); // ambiente de programação

const express = require('express'); 
const app = express();

const mongoose = require('mongoose'); // modelagem da base de dados
mongoose.connect(process.env.CONNECTIONSTRING)
.then(() => {
  console.log('Conectei a base de dados')
  app.emit('pronto')
})
.catch(e => console.log(e));

const session = require('express-session'); // cookie de sessão
const MongoStore = require('connect-mongo').default; // para salvar as sessões no banco de dados
const flashMessage = require('connect-flash'); // mensagens auto-destrutivas (perfeito para mensagens de erro)
const routes = require('./routes'); // rotas para acessar páginas do html (/home, /contato)
const path = require('path'); // trabalhar com caminhos
const helmet = require('helmet'); // recomendação do express
const csrf = require('csurf'); // tokens de formularios, para nenhum app externo poste coisas dentro da aplicação
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware') // middlewares, funções executadas na rota
app.use(express.urlencoded({ extended: true })); // postar formularios dentro da app
app.use(express.json()) 
app.use(express.static(path.resolve(__dirname, 'public'))); // para acessar arquivos estaticos (img, css, js)
app.use(helmet());

const sessionOptions = session({
  secret: 'abcde',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});
app.use(sessionOptions);
app.use(flashMessage());

app.set('views', path.resolve(__dirname, 'src', 'views')); // arquivos que são renderizados no html
app.set('view engine', 'ejs'); // engine para renderizar as views

app.use(csrf());

// Próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});

