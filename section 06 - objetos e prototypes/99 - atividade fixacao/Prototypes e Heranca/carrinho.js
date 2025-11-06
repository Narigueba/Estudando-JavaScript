// Carrinho
function Carrinho() {
    let itens = [];

    Object.defineProperty(this, 'itens', {
        enumerable: false,
        configurable: false,

        get: function() {
            return itens;
        }
    })
};

Carrinho.prototype.adicionar = function(produto) {
    this.itens.push(produto);
};

Carrinho.prototype.remover = function(nomeProduto) {
    const indice = itens.findIndex(item => item === nomeProduto)

    if(indice === -1) return console.log(`${nomeProduto} não foi encontrado no carrinho`);

    const removido = this.itens.splice(indice, 1)[0];
    console.log(`${nomeProduto} removido com sucesso!`)
};

Carrinho.prototype.calcularTotal = function() {
    //
};

Carrinho.prototype.listar = function() {

    if(this.itens.lenght === 0) return console.log('Carrinho vazio')

    this.itens.forEach((item, index) => {
        console.log(`${index + 1}. ${item.nome} - R$${item.preco.toFixed(2)}`)
    })
};
const carrinho = new Carrinho();

// Produto
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

// Caneca
function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    this.estoque = estoque;
};
const caneca = new Caneca('Caneca Chaves', 18, 'Porcelana', 10);

// Camisa
function Camisa(nome, preco, cor, tamanho) {
    Produto.call(this, nome, preco);
    this.cor = cor;
    this.tamanho = tamanho;
};
const camisa = new Camisa('Regata', 50, 'Preto', 'M');

// Livro
function Livro(nome, preco, autor) {
    Produto.call(this, nome, preco);
    this.autor = autor;
};
const livro = new Livro('Clean Code', 80, 'Guilherme M.');

//
carrinho.adicionar(caneca);
console.log(carrinho.listar())


/*
FALTA:
CALCULAR TOTAL
ADICIONAR
REMOVER
*/ 