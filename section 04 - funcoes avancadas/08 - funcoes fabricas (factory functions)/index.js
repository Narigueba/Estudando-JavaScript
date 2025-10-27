// Factory Function (Função Fábrica)
// Construction Function (Função Construtora)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala(assunto = 'Falando sobre nada') {
            return `${this.nome} está ${assunto}.`
        },
        altura,
        peso,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura **2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('Guilherme', 'Miranda', 1.75, 69);
console.log(p1.nomeCompleto);
console.log(p1.imc);
p1.nomeCompleto = 'Ana Julia Almeida';
console.log(p1.nomeCompleto);
console.log(p1.fala());