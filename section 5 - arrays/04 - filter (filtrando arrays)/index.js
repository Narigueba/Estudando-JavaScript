// Filter -> sempre retorna o array com a mesma quantidade de elementos ou menos

// Retorne numeros maiores que 10
const numeros = [1, 2, 10, 20, 30, 50, 40, 80, 5, 4, 7, 8, 6, 3];
// function callbackFilter(valor) {
//     return valor > 10;
// };
const numerosFiltrado = numeros.filter(valor => valor < 10)
console.log(numerosFiltrado)

//
// Retorne pessoas cujo nome tenha 5 letras ou mais
// Retorne pessoas com +50 anos
// Retorne pessoas cujo nome termina com A
const pessoas = [
    {nome: 'Gui', idade: 60},
    {nome: 'Maria', idade: 15},
    {nome: 'José', idade: 52},
    {nome: 'Rogerio', idade: 18}
]

const pessoasNomeGrande = pessoas.filter((obj) => obj.nome.length >= 5);
console.log(pessoasNomeGrande);

const pessoasIdosas = pessoas.filter((obj) => obj.idade > 50);
console.log(pessoasIdosas)

const pessoasQueTerminaComA = pessoas.filter((obj) => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoasQueTerminaComA)
