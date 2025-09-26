
// Criando objeto literal
// const pessoa = { 
//     nome: 'Guilherme',
//     sobrenome: 'Miranda',
//     idade: 21,
// };

// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);
// console.log(pessoa.idade);
// console.log(pessoa);


// Criando objeto com Pattern Factory
// function criaPessoa (nome, sobrenome, idade) { 
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// };

// const pessoa1 = criaPessoa('Guilherme', 'Miranda', 21);
// console.log(pessoa1);

const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Miranda',
    idade: 21,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();