const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <h1>Cadastro de Produtos</h1>
        <form action="/produtos" method="POST">
        Nome: <input type="text" name="nome"><br>
        Preço: <input type="number" name="preco"><br>
        Categoria: <input type="text" name="categoria"><br>
        <button>Cadastrar</button>
        </form>
        <hr>
        <h2>Testar rotas:</h2>

        <ul>
            <li><a href="/produtos/15">Buscar produto por ID 15</a></li>
            <li><a href="/produtos?categoria=eletronicos">Listar eletronicos</a></li>
            <li><a href="/produtos/456/editar">Editar Produto</a></li>
            <li><a href="/busca?nome=notebook&precoMax=3000">Busca avançada</a></li>
        </ul>
    `)
});

app.post('/produtos', (req, res) => {
    console.log(req.body);
    res.send(`${req.body.nome} cadastrado com sucesso!`)
});

app.get('/produtos', (req, res) => {
    console.log(req.query);
    
    if(req.query.categoria) {
        res.send(`Listando produto da categoria: ${req.query.categoria}`);
    } else {
        res.send(`Listando todos os produtos`);
    }
});

app.get('/produtos/:id/editar', (req, res) => {
    console.log(req.params);
    res.send(`Editando produto ID: ${req.params.id}`);
});

app.get('/produtos/:id', (req, res) => {
    console.log(req.params);
    res.send(`Você buscou o produto ID: ${req.params.id}`);
});

app.get('/busca', (req, res) => {
    console.log(req.query);
    
    if(req.query.nome) {
        res.send(`Produto encontrado: ${req.query.nome} - R$ ${req.query.precoMax}`);
    } else {
        res.send('Nenhum critério de busca informado');
    };
});

app.listen(3000, () => {
    console.log('http://localhost:3000')
});