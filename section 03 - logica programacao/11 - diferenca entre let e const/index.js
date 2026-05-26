const constante = true; // Não é possivel reatribuir um valor
let outraConstante = true; // É possivel atribuir um valor se não estiver em um bloco: { ... }
var variavel = true; // Var só tem escopo de função

let nome = 'Gui'; // Criado a variavel nome

if (true) {
    let nome = 'José'; // Criado a variavel nome novamente, pois ela se encontra em um bloco, logo ela ainda não foi criada nesse contexto
    console.log(nome)
}

var nome2 = 'Guigui';
