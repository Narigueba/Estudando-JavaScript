// array.splice (indice atual, quantidade delete, elem1, elem2...)
const nomes = ['Gui', 'Ana', 'Duda', 'Jose', 'Dario'];
// pop
// const removidos = nomes.splice(4, 1, 'Miranda');

// shift
// const removidos = nomes.splice(0, 1);
// console.log(nomes, removidos);

// push
nomes.splice(nomes.length, 0  , 'Luiz', 'Otavio', 'Miranda');
console.log(nomes)

// unshift
nomes.splice(0, 0, 'Abigail', 'Alfredo')
console.log(nomes)