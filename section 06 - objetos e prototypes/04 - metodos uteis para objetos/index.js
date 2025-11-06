const produto = { nome: 'Produto', preco: 15 };
// const outraCoisa = { ...produto, material: 'Porcelana' }; // produto copiado para a constante, de forma que a constante não aponta mais para o mesmo local na memoria, sendo alterada de forma individual

// const caneca = Object.assign({}, produto, { material: 'porcelana' }) 
// outra forma de fazer a copia

// produto.nome = 'Calça'
// console.log(caneca)
// console.log(produto)

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome')) 
// Mostra como está a configuração de uma propriedade

console.log(Object.entries(produto))
// Mostra os valores e as chaves das propriedades
console.log(Object.values(produto))
// Mostra somente os valores das propriedades

for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)
}