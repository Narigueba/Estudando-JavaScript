const numeros = [1, 2, 10, 20, 30, 50, 40, 80, 5, 4, 7, 8, 6, 3];
const numerosPares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor *2)
.reduce((acumulador, valor) => acumulador + valor);

console.log(numerosPares)
// [2, 10, 20, 30, 50, 40, 80,  4,  8,  6]
// [4,  20, 40, 60, 100, 80, 160,  8, 16,  12]
// 500