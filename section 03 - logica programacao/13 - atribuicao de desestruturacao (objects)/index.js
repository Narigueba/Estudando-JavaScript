const pessoa = {
    nome: 'Gui',
    sobrenome: 'Miranda',
    idade: 21,
    endereco: {
        rua: 'Capitao benevides',
        numero: 280,
    }
};

// Atribuição via desestruturação
// const { nome, sobrenome } = pessoa;
// const { 
//     endereco: { rua, numero },
//      endereco 
//     } = pessoa;
// console.log(nome, sobrenome)
// console.log(rua, numero, endereco)

const { nome, ...resto } = pessoa;
console.log(nome, resto)
