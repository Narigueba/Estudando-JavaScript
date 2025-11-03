function Pessoa(nome, cpf, idade) {
    this.nome = nome;

    let cpfPrivado = cpf;
    Object.defineProperty(this, 'cpf', {
        enumerable: true,
        configurable: false,

        get: function() {
            return cpfPrivado;
        }
    });

    let idadePrivada = idade;
    Object.defineProperty(this, 'idade', {
        enumerable: true,
        configurable: false,

        get: function() {
            return idadePrivada;
        },

        set: function(valor) {
            if(typeof valor !== 'number' || valor < 0 || valor > 150) {
                throw new TypeError('Idade inválida');
            }

            idadePrivada = valor;
        }
    }); 
};

const p = new Pessoa('João', '123.456.789-00', 25);
// console.log(p)
// console.log(p.nome);    // João
// console.log(p.cpf);     // 123.456.789-00
// console.log(p.idade);   // 25

// p.nome = 'Maria';       // ✅ funciona (público)
// p.cpf = 'outro';        // ❌ não muda (sem setter)
// console.log(p.cpf);     // ainda 123.456.789-00

// p.idade = 30;           // ✅ funciona
// p.idade = 200;          // ❌ erro!
// console.log(p.idade)