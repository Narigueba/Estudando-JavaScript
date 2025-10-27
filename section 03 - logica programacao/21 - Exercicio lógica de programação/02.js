// Escreva uma função chamada ePaisagem que recebe a altura e a largura (number)
// Retorne true se a imagem estiver no modo paisagem

// function ePaisagem(largura, altura) {
//     return largura > altura;

//     // return largura > altura ? true : false;
    
//     // if (largura > altura){
//     //     console.log('Paisagem')
//     //     return true;
//     // }
//     // console.log('Retrato')
//     // return false
// }

//arrow function
const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1920, 1080));

