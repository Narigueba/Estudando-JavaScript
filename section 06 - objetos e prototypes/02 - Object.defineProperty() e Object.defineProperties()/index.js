// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave em um for in
        value: estoque, // define o valor da chave
        writable: false, // pode ou não alterar o valor
        configurable: false // pode reconfigurar ou não a chave,
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave em um for in
            value: nome, // define o valor da chave
            writable: true, // pode ou não alterar o valor
            configurable: true // pode reconfigurar ou não a chave,
        },
        preco: {
            enumerable: true, // mostra a chave em um for in
            value: preco, // define o valor da chave
            writable: true, // pode ou não alterar o valor
            configurable: true // pode reconfigurar ou não a chave,
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 500;
// console.log(p1.estoque())
// console.log(Object.keys(p1))
console.log(p1)

for (let chave in p1) {
    console.log(chave)
}