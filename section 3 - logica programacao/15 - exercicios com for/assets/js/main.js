const elementos = [
    {tag: 'p', texto: 'Frase 1'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'}, // 2
    {tag: 'section', texto: 'Frase 4'}, // 3
]

const container = document.querySelector('.container');
const div = document.createElement('div');

for (i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i]; // desestruturação da array
    let tagCriada = document.createElement(tag) // criação da tag pela array
    tagCriada.innerHTML = texto; // inserção da frase na div
    div.appendChild(tagCriada); // inserção da tagCriada na div
}

container.appendChild(div);
