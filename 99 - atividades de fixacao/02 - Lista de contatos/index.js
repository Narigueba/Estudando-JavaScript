const contatos = [
    {
        nome: 'Guilherme',
        telefone: '65992831320',
        email: 'guilhermemiranda@gmail.com'
    },
    {
        nome: 'Duda',
        telefone: '6599999999',
        email: 'dudavg@gmail.com'
    },
    {
        nome: 'Ana Julia',
        telefone: '6599965774',
        email: 'anajulia@gmail.com'
    }
];

function listarContatos() {
    for (let contato of contatos) {
        console.log(contato.nome);
        console.log(contato.telefone);
        console.log(contato.email);
    }
}

// console.log(listarContatos()) - undefined no final?

function buscarContato(nome) {
    for(let contato of contatos) {
        if(nome === contato.nome) {
            return contato;
        }
        return 'Contato não encontrado'
    };
}

// console.log(buscarContato('Guilherme')) - deu certo

function adicionarContato(nome, telefone, email) {
    contatos.push({ nome, telefone, email });
    return contatos;
}

// console.log(adicionarContato('balo', '666', 'hui@gmail.com')) // nao sei se deu certo, preciso testar

function removerContato(nome) {
    for(let contato of contatos) {
        if(nome === contato) {
            return contatos.pop(contato);
        }
        return 'Contato não encontrado'
    }
};

console.log(removerContato('Guilherme')) // não funcionou, preciso rever