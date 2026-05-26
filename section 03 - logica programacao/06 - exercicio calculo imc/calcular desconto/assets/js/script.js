const form = document.querySelector('.form');

form.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const inputPreco = evento.target.querySelector('#preco');
    const inputDesconto = evento.target.querySelector('#desconto')

    const preco = Number(inputPreco.value);
    const desconto = Number(inputDesconto.value);

    if (isNaN(preco) || preco <= 0) {
        setResultado('Preço invalido', false);
        return;
    }

    if (isNaN(desconto) || desconto < 0) {
        setResultado('Desconto invalido', false);
        return;
    }

    const resultado = calcularDesconto(preco, desconto)

    const msg = `O valor de sua compra com desconto é R$ ${resultado}`

    setResultado(msg, true);

});

// Funções

function setResultado(msg, isValid) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = '';
    const p = criarParagrafo();

    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}

function criarParagrafo() {
    const p = document.createElement('p');
    return p
}


function calcularDesconto (preco, desconto) {
    const valorFinal = preco - (preco * (desconto / 100));
    return valorFinal.toFixed(2);
}
