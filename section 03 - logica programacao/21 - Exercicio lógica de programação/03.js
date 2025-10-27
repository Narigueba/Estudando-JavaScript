function eDivisivel(numero) {
    // if (typeof numero !== 'number'){
    //     console.log('Insira um valor válido')
    //     return numero;
    // }

    // if (numero % 3 === 0 && numero % 5 === 0) {
    //     console.log(`${numero}: FizzBuzz`);
    // } else if (numero % 3 === 0){
    //     console.log(`${numero}: Fizz`);
    // } else if (numero % 5 === 0){
    //     console.log(`${numero}: Buzz`)
    // } else {
    //     return console.log(`${numero} não é divisivel por 3 nem por 5`)
    // }

    if (typeof numero !== 'number') return NaN;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

console.log('a', eDivisivel('a'))
for (let i = 0; i <= 100; i++){
    console.log(i, eDivisivel(i));
}