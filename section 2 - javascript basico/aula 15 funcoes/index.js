function saudacao(nome){
    return `Bom dia ${nome}`;
}
console.log(saudacao('Guilherme'));

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}
console.log(soma(2, 3));
console.log(soma(2, 2));
console.log(soma(-1, 3));

const raiz = function(n) {
    return n ** 0.5;
}
console.log(raiz(9));

const raiz2 = n => n ** 0.5; // arrow function
console.log(raiz2(16));
