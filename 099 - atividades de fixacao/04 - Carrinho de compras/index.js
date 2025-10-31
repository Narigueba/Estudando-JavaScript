function Carrinho() {
    let itens = [];

    // Métodos
    this.adicionarItem = (nome, preco, quantidade) => {
       itens.push({ nome, preco, quantidade });
       console.log(`${nome} adicionado ao carrinho!`);
    };

    this.removerItem = (nome) => {
        const tamanhoAntes = itens.length;
        itens = itens.filter(item => item.nome !== nome);
        
        if (itens.length < tamanhoAntes) {
            console.log(`${nome} removido com sucesso!`);
        }
        
        console.log(`Item não encontrado`);
    };

    this.localizarItem = (nome) => {
        const tamanhoAntes = itens.length;
        itens = itens.filter(item => item.nome === nome);

        if(itens.length < tamanhoAntes) {
            console.log(`${nome} localizado no carrinho`)
            console.log(`${item.nome} - R$ ${item.preco} x ${item.quantidade} = R$ ${(item.preco * item.quantidade).toFixed(2)} `)
        } else {
            console.log('O item não está no carrinho')
        }
    };

    this.calcularTotal = () => {
        let total = 0;

        for (item of itens) {
            total += item.preco * item.quantidade
        }

        return total;
    };
    
    this.listarItens = () => {
        if(itens.length === 0) {
            console.log(`O carrinho está vazio`);
        }

        console.log('\n=== ITENS NO CARRINHO ===')
        for(item of itens) {
            console.log(`${item.nome} - R$ ${item.preco} x ${item.quantidade} = R$ ${(item.preco * item.quantidade).toFixed(2)} `)
        }
        console.log(`\nTotal: R$ ${this.calcularTotal().toFixed(2)}`);

    };
};

const carrinho = new Carrinho();

carrinho.adicionarItem('Notebook', 100, 10);
carrinho.adicionarItem('Computador', 200, 5);
carrinho.adicionarItem('Teclado', 50, 20);
carrinho.listarItens()

carrinho.removerItem('Teclado')
carrinho.listarItens()

carrinho.localizarItem('Computador')