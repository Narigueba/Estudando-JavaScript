function Carrinho(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Carrinho.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}
Carrinho.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}

//

function Caneca(nome, preco, material, estoque) {
    Carrinho.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,

        get: function() {
            return estoque  
        },
        set: function(valor) {
            if(typeof valor !== 'number' || valor < 0) throw new Error('Estoque deve ser um número positivo');
            estoque = valor;
        }
    })
};


// Herança
Caneca.prototype = Object.create(Carrinho.prototype);
Caneca.prototype.constructor = Caneca;


// Métodos do Constructor Caneca
Caneca.prototype.vender = function(quantidade) {
     if(typeof quantidade !== 'number' || quantidade <= 0) throw new TypeError('O valor não pode ser negativo');
     
     if(quantidade > this.estoque) throw new Error(`Estoque insuficiente! Disponível: ${this.estoque}`);

     this.estoque -= quantidade;
     console.log(`Vendido ${quantidade} unidade(s). Estoque restante: ${this.estoque}`);
};

Caneca.prototype.repor = function(quantidade) {
    if (typeof quantidade !== 'number' || quantidade <= 0) throw new Error('Quantidade deve ser um número positivo');

    this.estoque += quantidade;
    console.log(`Reposto ${quantidade} unidade(s). Estoque atual: ${this.estoque}`);
}

Caneca.prototype.disponivel = function() {
    return this.estoque > 0;
};


const caneca = new Caneca('Caneca Chaves', 10, 'Porcelana', 10);

console.log('\n--- ESTADO INICIAL ---');
console.log(caneca); // estoque: 10

console.log('\n--- AUMENTO DE PREÇO ---');
caneca.aumento(100); // +100%
console.log(`Preço: R$ ${caneca.preco}`); // 20

console.log('\n--- DESCONTO ---');
caneca.desconto(10); // -10%
console.log(`Preço: R$ ${caneca.preco}`); // 18

console.log('\n--- VENDAS ---');
caneca.vender(3);  // Vende 3
caneca.vender(2);  // Vende 2
console.log(`Estoque: ${caneca.estoque}`); // 5

console.log('\n--- REPOSIÇÃO ---');
caneca.repor(10);  // Repõe 10
console.log(`Estoque: ${caneca.estoque}`); // 15

console.log('\n--- VERIFICAÇÕES ---');
console.log(`Disponível? ${caneca.disponivel()}`); // true

console.log('\n--- TENTANDO VENDER MAIS QUE O ESTOQUE ---');
try {
    caneca.vender(20); // Erro: só tem 15
} catch(erro) {
    console.log(`❌ ${erro.message}`);
}

console.log('\n--- TENTANDO VENDER QUANTIDADE INVÁLIDA ---');
try {
    caneca.vender(-5); // Erro: negativo
} catch(erro) {
    console.log(`❌ ${erro.message}`);
}

console.log('\n--- VENDENDO TODO ESTOQUE ---');
caneca.vender(15);
console.log(`Disponível? ${caneca.disponivel()}`); // false