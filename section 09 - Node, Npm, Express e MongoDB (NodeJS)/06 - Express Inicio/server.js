const express = require('express');
const app = express();

// CRUD - CREATE, READ, UPDATE,    DELETE
//        POST,   GET,  PUT,       DELETE
//        CRIAR,  LER,  ATUALIZAR, APAGAR

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/contato <- GET -> Entregue a página /contato

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>   
    `)
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário')
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato conosco.')
})

app.listen(3000, () => {
    console.log('Acessar em http://localhost:3000')
    console.log('Servidor iniciado na porta 3000')
});