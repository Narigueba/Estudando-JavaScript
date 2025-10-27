// try {
//     console.log(naoExisto);
// } catch(error){
//     console.log('Variavel nao existe');
//     console.log(error);
// }

function soma(x, y){
    if(
        typeof x !== 'number' ||
        typeof y !== 'number'
    ) {
        throw new TypeError('x e y precisam ser numeros')
    }

    return x + y;
}

try{
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(error){
    console.log(error);
    console.log('Assim fica mais amigavel que error')
}