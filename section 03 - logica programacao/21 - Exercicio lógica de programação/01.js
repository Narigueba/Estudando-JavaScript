// Escreva uma função que recebe 2 numeros e retorne o maior deles;

const numeroUm = 10000;
const numeroDois = 36000;

function getMaior(numberOne, numberTwo) {
    if (numberOne < numberTwo){
        return console.log(`${numberTwo} é o numero maior`);
    }
    return console.log(`${numberTwo} é maior`);
}

getMaior(numeroUm, numeroDois);