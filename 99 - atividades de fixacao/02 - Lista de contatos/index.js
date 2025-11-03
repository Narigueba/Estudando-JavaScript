let contatos = [
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

// listarContatos() // deu certo

function buscarContato(nome) {
    for(let contato of contatos) {
        if(nome === contato.nome) {
            return contato;
        }
    };

    return 'Contato não encontrado'
}

// console.log(buscarContato('Guilherme')) - deu certo

function adicionarContato(nome, telefone, email) {
    contatos.push({ nome, telefone, email });
    return contatos;
}

// console.log(adicionarContato('balo', '666', 'hui@gmail.com')) // nao sei se deu certo, preciso testar

function removerContato(nome) {
    const tamanhoAntes = contatos.length;
    contatos = contatos.filter(contato => contato.nome !== nome);

    if (contatos.length < tamanhoAntes) {
        console.log(`Contato ${nome} removido`);
        return contatos
    }

    return 'Contato não encontrado';
};

// console.log(removerContato('Ana Julia')) // não funcionou, preciso rever

console.log('=== LISTANDO CONTATOS ===');
listarContatos();

console.log('\n=== BUSCANDO GUILHERME ===');
console.log(buscarContato('Guilherme'));

console.log('\n=== ADICIONANDO JOÃO ===');
adicionarContato('João', '6599887766', 'joao@email.com');

console.log('\n=== LISTANDO NOVAMENTE ===');
listarContatos();

console.log('\n=== REMOVENDO DUDA ===');
removerContato('Duda');

console.log('\n=== LISTANDO APÓS REMOÇÃO ===');
listarContatos();

console.log('\n=== TENTANDO REMOVER CONTATO INEXISTENTE ===');
console.log(removerContato('Jose'));