// Função construtora/fábrica retorna objetos
// Construtora -> Pessoa
// Fábrica -> criaPessoa

function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 1;

    const metodoInterno = function() {
        console
    }

    // Atributos ou métodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': Sou um metodo')
    }
}

const p1 = new Pessoa('Gui', 'Miranda')
console.log(p1.nome)
p1.metodo()
