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
    if(!produto.nome || typeof produto.preco !== 'number' || produto.preco < 0) throw new TypeError('Produto Invalido')
    this.itens.push(produto);
    console.log(`✅ ${produto.nome} adicionado ao carrinho`);
};

Carrinho.prototype.remover = function(nomeProduto) {
    const indice = this.itens.findIndex(item => item.nome === nomeProduto)

    if(indice === -1) return console.log(`${nomeProduto} não foi encontrado no carrinho`);

    const removido = this.itens.splice(indice, 1)[0];
    console.log(`${removido.nome} removido com sucesso!`)
};

Carrinho.prototype.calcularTotal = function() {
    const total = this.itens.reduce((acumulador, produto) => {
        return acumulador + produto.preco;
    }, 0);

    return total;
};

Carrinho.prototype.listar = function() {

    if(this.itens.length === 0) return console.log('Carrinho vazio')

    this.itens.forEach((item, index) => {
        console.log(`${index + 1}. ${item.nome} - R$${item.preco.toFixed(2)}`)
    })
};

Carrinho.prototype.limpar = function() {
    this.itens.length = 0;
    console.log('Carrinho limpo')
};

Carrinho.prototype.quantidadeItens = function() {
    return this.itens.length;
}

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


// Camisa
function Camisa(nome, preco, cor, tamanho) {
    Produto.call(this, nome, preco);
    this.cor = cor;
    this.tamanho = tamanho;
};


// Livro
function Livro(nome, preco, autor) {
    Produto.call(this, nome, preco);
    this.autor = autor;
};


//
const carrinho = new Carrinho();

const caneca = new Caneca('Caneca Chaves', 18, 'Porcelana', 10);
const camisa = new Camisa('Regata', 50, 'Preto', 'M');
const livro = new Livro('Clean Code', 80, 'Guilherme M.');

carrinho.adicionar(caneca);
carrinho.adicionar(camisa);
carrinho.adicionar(livro);

carrinho.listar();
// Saída:
// 🛒 ITENS DO CARRINHO:
// 1. Caneca Chaves - R$ 18.00
// 2. Regata - R$ 50.00
// 3. Clean Code - R$ 80.00
// 💰 TOTAL: R$ 148.00

console.log(`Quantidade: ${carrinho.quantidadeItens()} itens`); // 3

carrinho.remover('Regata');
carrinho.listar();
// TOTAL agora é R$ 98.00

carrinho.limpar();
carrinho.listar();
// 🛒 Carrinho vazio

