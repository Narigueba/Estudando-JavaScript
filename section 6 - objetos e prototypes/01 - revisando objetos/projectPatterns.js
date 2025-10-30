// Factory Functions 
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
};

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.nomeCompleto);



// Constructor Functions

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p2 = new Pessoa('Guilherme', 'Miranda');