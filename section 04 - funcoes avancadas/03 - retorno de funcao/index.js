// return
// Retorna um valor
// Termina a função

// function soma(a, b) {
//     return a + b;
// }

// console.log(soma(1, 1));

// function criaPessoa(nome, sobrenome) {
//     return { nome, sobrenome };
// }
// const p1 = criaPessoa('Guilherme', 'Miranda');
// console.log(typeof p1)

// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }

// const olaMundo = falaFrase('Olá');
// console.log(olaMundo('mundo!'));

function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));