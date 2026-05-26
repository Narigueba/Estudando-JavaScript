// Map 
const numeros = [1, 2, 10, 20, 30, 50, 40, 80, 5, 4, 7, 8, 6, 3];

const dobro = numeros.map(valor => valor * 2);
// console.log(dobro)


// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave nome do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Gui', idade: 60},
    {nome: 'Maria', idade: 15},
    {nome: 'José', idade: 52},
    {nome: 'Rogerio', idade: 18}
];
const nomes = pessoas.map(obj => obj.nome)
// console.log(nomes)

const idades = pessoas.map(obj => ({ idade: obj.idade }));
// console.log(idades)

const comIds = pessoas.map(function(obj, indice) {
    const newObj = { ...obj };
    newObj.id = indice + 1;
    return newObj;
});
console.log(pessoas);
console.log(comIds);