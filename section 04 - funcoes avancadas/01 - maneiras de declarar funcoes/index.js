// Declaração de função (function hoisting)
// O JavaScript eleva a função para o topo, ou seja, em qualquer local do código, a função irá funcionar.
// Exemplo
falaOi();
function falaOi() {
    console.log('Oi');
}

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function() {
    console.log('Sou um dado');
}
souUmDado();
function executaFuncao(funcao) {
    funcao();
}
executaFuncao(souUmDado);

// Arrow Functions

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}

funcaoArrow();

// Dentro de um objeto

const pessoa = {
    falar: function() {
        console.log('Estou falando')
    },
    naoFalar() {
        console.log('Nao quero falar')
    }
}

pessoa.falar();
pessoa.naoFalar();