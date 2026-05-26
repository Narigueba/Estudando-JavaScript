// Função definida com function tem uma variavel "arguments"
// que sustenta todos os argumentos enviados, mesmo sem definição na função
function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total)
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//

function funcao2(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total, a, b, c)
}
funcao2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//

function funcao3(a, b, c, d, e) {
    console.log(a, b, c, d, e)
}

funcao3(1, 2, 3); // undefined undefined

function funcao4(a, b = 0) {
    // b = b || 0;
    console.log(a + b)
}

funcao4(1, 2)

function funcao5({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade)
}

funcao5({ nome: 'Guilherme', sobrenome: 'Miranda', idade: 20});

const conta = function(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};
conta('+', 1, 20, 30, 40, 50);
