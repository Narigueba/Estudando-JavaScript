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

let produtos = [];

// Renderizar produtos na tela
function renderizarProdutos() {
    const lista = document.getElementById("produtosList");

    if (produtos.length === 0) {
        lista.innerHTML =
            '<div class="empty-state">Nenhum produto cadastrado ainda.</div>';
        return;
    }

    let html = "";
    produtos.forEach((produto, index) => {
        html += `
                    <div class="produto-card">
                        <h3>${produto.nome}</h3>
                        <div class="produto-info">
                            <strong>Preço:</strong> R$ ${produto.preco.toFixed(
                                2
                            )}
                        </div>
                        <div class="produto-info">
                            <strong>Estoque:</strong> ${
                                produto.estoque
                            } unidades
                        </div>
                        
                        <div class="actions">
                            <button class="btn btn-small" onclick="testarDesconto(${index})">
                                Calcular Desconto
                            </button>
                            <button class="btn btn-small" onclick="testarEstoque(${index})">
                                Verificar Estoque
                            </button>
                            <button class="btn btn-small" onclick="calcularTotal(${index})">
                                Calcular Total
                            </button>
                        </div>
                        
                        <div id="result-${index}"></div>
                    </div>
                `;
    });

    lista.innerHTML = html;
}

// Adicionar produto
document.getElementById("formProduto").addEventListener("submit", function (e) {
    e.preventDefault();
    e.stopPropagation();

    const nome = document.getElementById("nome").value;
    const preco = parseFloat(document.getElementById("preco").value);
    const estoque = parseInt(document.getElementById("estoque").value);

    console.log("Adicionando produto:", nome, preco, estoque);

    const novoProduto = new Produto(nome, preco, estoque);
    produtos.push(novoProduto);

    console.log("Total de produtos:", produtos.length);

    // Limpar formulário
    this.reset();

    renderizarProdutos();

    return false;
});

// Testar desconto
function testarDesconto(index) {
    const produto = produtos[index];
    const desconto = prompt(
        "Digite o percentual de desconto (ex: 10 para 10%):"
    );

    if (desconto !== null && desconto !== "") {
        const precoComDesconto = produto.aplicarDesconto(parseFloat(desconto));
        mostrarResultado(
            index,
            `Preço com ${desconto}% de desconto: R$ ${precoComDesconto.toFixed(
                2
            )}`
        );
    }
}

// Testar estoque
function testarEstoque(index) {
    const produto = produtos[index];
    const quantidade = prompt("Digite a quantidade desejada:");

    if (quantidade !== null && quantidade !== "") {
        const temEstoque = produto.temEstoque(parseInt(quantidade));
        const mensagem = temEstoque
            ? `✅ Temos ${quantidade} unidades em estoque!`
            : `❌ Estoque insuficiente! Temos apenas ${produto.estoque} unidades.`;
        mostrarResultado(index, mensagem);
    }
}

// Calcular total
function calcularTotal(index) {
    const produto = produtos[index];
    const quantidade = prompt("Digite a quantidade para calcular o total:");

    if (quantidade !== null && quantidade !== "") {
        const total = produto.valorTotal(parseInt(quantidade));
        const mensagem =
            total > 0
                ? `Total: R$ ${total.toFixed(
                      2
                  )} (${quantidade} x R$ ${produto.preco.toFixed(2)})`
                : `❌ Quantidade solicitada maior que o estoque disponível!`;
        mostrarResultado(index, mensagem);
    }
}

// Mostrar resultado
function mostrarResultado(index, mensagem) {
    const resultDiv = document.getElementById(`result-${index}`);
    resultDiv.innerHTML = `<div class="result">${mensagem}</div>`;

    // Remover mensagem após 5 segundos
    setTimeout(() => {
        resultDiv.innerHTML = "";
    }, 5000);
}

// Inicializar
renderizarProdutos();
