/*
    Entre 0 - 11 = Bom dia
    Entre 12 - 17 = Boa tarde
    Entre 18 - 23 = Boa noite
*/

let hora = 129;

if (hora >= 0 && hora <= 11){
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17){
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23){
    console.log('Boa noite');
} else {
    console.log('Horário invalido');
}

let numero = 10;

if (numero >= 0 && numero <= 5){
    console.log('Entre 0 e 5');
} else if (numero >= 6 && numero <= 10){
    console.log('Entre 6 e 10');
} else if (numero >= 11 && numero <= 15){
    console.log('Entre 11 e 15');
} else {
    console.log('Entre 16 e 20');
}