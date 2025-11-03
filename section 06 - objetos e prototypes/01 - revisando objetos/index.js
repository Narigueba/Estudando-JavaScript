const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Miranda'
};

const pessoa1 = new Object();
pessoa1.nome = 'Duda';
pessoa1.sobrenome = 'Miranda'
pessoa1.idade = 30;
pessoa1.falarNome = function() {
     return `${this.nome} está falando seu nome`
}
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade
    
}

for (let chave in pessoa1) {
    console.log(pessoa1[chave])
}

// console.log(pessoa1)
// pessoa1.falarNome()
// console.log(pessoa1.getDataNascimento())


