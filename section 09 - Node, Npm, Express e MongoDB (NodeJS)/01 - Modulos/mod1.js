// const nome = 'Guilherme';
// const sobrenome = 'Miranda';

// const falaNome = () => nome + ' ' + sobrenome;

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'Oque eu quiser exportar';

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

module.exports.Pessoa = Pessoa;
exports.Pessoa = Pessoa;
this.Pessoa = Pessoa;

const nome = 'Gui';
const sobrenome = 'Miranda';

module.exports = {
    nome, sobrenome
}