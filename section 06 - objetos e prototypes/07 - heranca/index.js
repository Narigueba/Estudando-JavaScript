// Ecommerce
// Produto -> aumento preço, desconto
// Camisa = cor, tamanho | caneca = plastico, porcelana

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

// Camisa herda tudo de produto, porém tem parametros específicos, sem alterar o seu pai: Produto
function Camisa(nome, preco, cor, tamanho) {
    Produto.call(this, nome, preco);
    this.cor = cor;
    this.tamanho = tamanho;
};

Camisa.prototype = Object.create(Produto.prototype); // Camisa.prototype.constructor = camisa
Camisa.prototype.constructor = Camisa; // Camisa.prototype.constructor = Produto
Camisa.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
};


function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Generico', 10);
const camisa = new Camisa('Regata', 7.5, 'Preto', 'M');
const caneca = new Caneca('Caneca', 10, 'Plastico', 10);

camisa.aumento(100);
console.log(produto);
console.log(camisa);
console.log(caneca);
console.log(caneca.estoque); 


