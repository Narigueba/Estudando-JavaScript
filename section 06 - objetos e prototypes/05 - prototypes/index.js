// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`
}

// instâcia
const pessoa1 = new Pessoa('Gui', 'Miranda');
const pessoa2 = new Pessoa('Duda', 'Ribeiro');

console.log(pessoa1);
console.log(pessoa2);


// ❌ SEM prototype (desperdício de memória)
function PessoaSemPrototype(nome) {
    this.nome = nome;
    this.saudar = function() {
        return `Olá, ${this.nome}`;
    };
}

// ✅ COM prototype (eficiente)
function PessoaComPrototype(nome) {
    this.nome = nome;
}
PessoaComPrototype.prototype.saudar = function() {
    return `Olá, ${this.nome}`;
};

// Criando 1000 instâncias
const pessoas1 = [];
const pessoas2 = [];

for(let i = 0; i < 1000; i++) {
    pessoas1.push(new PessoaSemPrototype(`Pessoa${i}`));
    pessoas2.push(new PessoaComPrototype(`Pessoa${i}`));
}

// PessoaSemPrototype: 1000 funções saudar criadas
// PessoaComPrototype: apenas 1 função saudar compartilhada!

/*
## 📚 Resumo Visual

Objeto (pessoa1)
    ↓
    └─> tem propriedades próprias (nome, sobrenome)
    └─> __proto__ aponta para ↓
    
Pessoa.prototype
    └─> métodos compartilhados (nomeCompleto)
    └─> __proto__ aponta para ↓
    
Object.prototype
    └─> métodos base (toString, valueOf, etc)
    └─> __proto__ = null
*/