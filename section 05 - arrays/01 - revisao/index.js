// const nomes = ['Gui', 'Duda', 'Ana'];
// String, objetos, Funções, Números

const nomes = new Array('Gui', 'Duda', 'Ana');
console.log(nomes)

const novo = [...nomes]; // Faz a cópia de um array para outro
novo.push('Ana Julia')
novo.pop();
novo.shift();
novo.unshift('Gui');
console.log(novo)

// array.pop() - remove do final
// array.shift() - remove do começo e realoca os indices
// array.push() - adiciona um dado no final do array
// array.unshift() - adiciona um dado no final do array e realoca os indices

const pessoas = ['Gui', 'José', 'Rogerio', 'Julio', 'Andrade'];
const novo2 = pessoas.slice(1, 3);
console.log(novo2)

// array.slice() - fatia o indice de acordo com os parametros (inicia no indice passado até o dado anterior ao indice final)


// Transformando string em uma array
// const nome = 'Guilherme Augusto Miranda';
// const nomes2 = nome.split(' ');
// console.log(nomes2)

// Transformando array em uma string
const nomes2 = ['Guilherme', 'Miranda'];
const nome = nomes2.join(' ');
console.log(nome)
