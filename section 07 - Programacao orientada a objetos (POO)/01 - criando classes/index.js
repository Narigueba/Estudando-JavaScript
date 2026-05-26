class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar() {
        console.log(`${this.nome} está falando`)
    }
}

const p1 = new Pessoa('Gui', 'Miranda')
const p2 = new Pessoa('Duda', 'Ribeiro')
console.log(p1)
console.log(p2)
p1.falar()
p2.falar()