// Reduce
// Some todos os numeros (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
const numeros = [1, 2, 10, 20, 30, 50, 40, 80, 5, 4, 7, 8, 6, 3];

const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
}, 0);
console.log(total)


const pares = numeros.reduce(function(acumulador, valor) {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
console.log(pares);


const dobro = numeros.reduce(function(acumulador, valor) {
    acumulador.push(valor * 2);
    return acumulador;
}, []);
console.log(dobro)

const pessoas = [
    {nome: 'Gui', idade: 60},
    {nome: 'Maria', idade: 15},
    {nome: 'José', idade: 105},
    {nome: 'Rogerio', idade: 18}
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
})
console.log(maisVelha)