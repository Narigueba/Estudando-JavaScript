function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};
Produto.prototype.aumentaPreco = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camisa', 100);
console.log(p1);

/* 
p1.desconto(10); = 90
console.log(p1)
p1.aumentaPreco(10); = 99
console.log(p1)
*/

const p2 = {
    nome: 'Caneca',
    preco: 10
};
Object.setPrototypeOf(p2, Produto.prototype);
/*
console.log(p2)
p2.aumentaPreco(80);
console.log(p2)
*/


const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 100
    },
    material: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Algodão'
    },
});
p3.aumentaPreco(10)
console.log(p3)