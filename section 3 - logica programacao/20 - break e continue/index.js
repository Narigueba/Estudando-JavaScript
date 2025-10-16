

// for (let numero of numeros){

//     if (numero === 2){
//         continue;
//     }

//     if (numero === 6){
//         console.log(numero)
//         break;
//     }
//     console.log(numero)
// }
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;

while (i < numeros.length) {
    let numero = numeros[i];

    if (numero === 2){
        console.log('pulei o 2');
        i++;
        continue;
    }

    if (numero === 7){
        console.log('7 encontrado');
        i++;
        break;
    }

    console.log(numero);
    i++;
}