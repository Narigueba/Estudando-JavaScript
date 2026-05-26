function criaPessoa(nome, sobrenome) {
    
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
};
const falar = {
    falar() {
        console.log(`${this.nome} está falando`)
    },
}
const comer = {
    comer() {
        console.log(`${this.nome} está comendo`)
    },
}

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`)
    },
}

// const pessoaPrototype = {...falar, ...comer, ...beber } // forma alterantiva
const pessoaPrototype = Object.assign({}, falar, comer, beber)


const p1 = criaPessoa('Gui', 'Miranda')
const p2 = criaPessoa('Maria E.', 'Ribeiro')
console.log(p1.nome)
console.log(p2.nome)
p1.falar()
p2.falar()
