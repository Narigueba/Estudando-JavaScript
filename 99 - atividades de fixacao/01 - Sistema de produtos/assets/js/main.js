// Sistema de produtos
// Constructor Function

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    this.aplicarDesconto = (desconto) => {
        const descontoConvertido = desconto / 100;
        return this.preco - this.preco * descontoConvertido;
    };

    this.temEstoque = (quantidade) => this.estoque >= quantidade;

    this.valorTotal = (quantidade) => {
        if (this.temEstoque(quantidade)) {
            return this.preco * quantidade;
        }
        return 0;
    };
}
