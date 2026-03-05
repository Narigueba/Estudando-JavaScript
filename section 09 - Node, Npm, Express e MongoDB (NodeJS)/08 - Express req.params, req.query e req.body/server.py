const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }))
// trata o corpo do body, captura todos os post/put do formulário

// http://facebook.com/profiles/5 <- url params
// http://facebook.com/profiles/12345?campanha=metaads&nomecampanha=vendas <- query strings
// ? - inicia a query strings / & - separa uma query de outra

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Cliente: <input type="text" name="nome">
        <button>Enviar</button>
        </form>   
    `)
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params);
});

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`Oque você enviou: ${req.body.nome}`)
})

app.listen(3000, () => {
    console.log('Acessar em http://localhost:3000')
    console.log('Servidor iniciado na porta 3000')
});