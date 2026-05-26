const elementos = [
    {tag: 'p', texto: 'Nova Tentantiva 1'}, // 0
    {tag: 'div', texto: 'Nova Tentantiva 2'}, // 1
    {tag: 'footer', texto: 'Nova Tentantiva 3'}, // 2
    {tag: 'section', texto: 'Nova Tentantiva 4'}, // 3
]

const container = document.querySelector('.container');
const div = document.createElement('div');

for (i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;    
    div.appendChild(tagCriada);
}

container.appendChild(div);

